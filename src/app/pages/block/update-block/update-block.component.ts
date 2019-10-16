import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Block } from '../../../core/models/block.models';
import { BlockService } from 'src/app/core/services/block.service';
import { BuildService } from 'src/app/core/services/build.service';
import { Build } from 'src/app/core/models/build.models';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-block',
  templateUrl: './update-block.component.html',
  styleUrls: ['./update-block.component.scss']
})
export class UpdateBlockComponent implements OnInit {

  // bread crumb items
  breadCrumbItems: Array<{}>;
  formValidation: FormGroup;
  submitControl: boolean;
  block: Block;
  builds: Build[] = [];
  buildId: number;
  blockId: number;
  checkboxValue = false;
  success = false;
  constructor(public formBuilder: FormBuilder, private router: Router, private route: ActivatedRoute, private blockService: BlockService, private buildService: BuildService) { }
  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Ana Sayfa', path: '/' }, { label: 'Blok Düzenle', path: '/', active: true }];

    this.formValidation = this.formBuilder.group({
      blockName: ['', [Validators.required]],
      blockGps: ['', [Validators.required]],
    });
    this.buildService.getAll().subscribe(data => {
      this.builds = data;
    });
    this.getBlockById();
    this.submitControl = false;
  }

  get basic() {
    return this.formValidation.controls;
  }

  setBuildId(buildId: any) {
    this.buildId = buildId;
  }

  submit() {
    this.submitControl = true;
    if (this.formValidation.status == "VALID") {
      this.block = {
        name: this.formValidation.value.blockName,
        gps: this.formValidation.value.blockGps,
        active: this.checkboxValue,
        id: this.blockId
      };
      this.blockService.update(this.block, this.buildId).subscribe(res => {
        if (res.success) {
          this.success = true;
          setTimeout(() => this.success = false, 500);
          setTimeout(() => this.router.navigate(['/block/list']), 1000);
        }
        else if (!res.success) {
          console.log("Sunucu Tarafından Başarısız Oldu.");
        }
        else {
          console.log("Bağlanamadı");
        }
      });
    }
  }
  getBlockById(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.blockService.getById(id)
      .subscribe(block => {
        this.block = block;
        this.checkboxValue = block.active;
        this.blockId = block.id;
        this.buildId = block.build.id;
      });
  }
}
