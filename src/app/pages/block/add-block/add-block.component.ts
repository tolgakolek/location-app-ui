import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Block } from '../../../core/models/block.models';
import { BlockService } from 'src/app/core/services/block.service';
import { BuildService } from 'src/app/core/services/build.service';
import { Build } from 'src/app/core/models/build.models';

@Component({
  selector: 'app-add-block',
  templateUrl: './add-block.component.html',
  styleUrls: ['./add-block.component.scss']
})
export class AddBlockComponent implements OnInit {

  // bread crumb items
  breadCrumbItems: Array<{}>;
  formValidation: FormGroup;
  submitControl: boolean;
  block: Block;
  builds: Build[] = [];
  buildId: number;
  checkboxValue = false;
  success = false;
  constructor(public formBuilder: FormBuilder, private blockService: BlockService, private buildService: BuildService) { }
  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Home', path: '/' }, { label: 'Yeni Blok', path: '/', active: true }];

    this.formValidation = this.formBuilder.group({
      blockName: ['', [Validators.required]],
      blockGps: ['', [Validators.required]],
    });
    this.buildService.getAll().subscribe(data => {
      this.builds = data;
    });
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
        active: this.formValidation.value.active
      };
      this.blockService.save(this.block,this.buildId).subscribe(res => {
        if (res.isSuccess) {
        this.success = true;
          setTimeout(() => this.success = false, 2000);
          setTimeout(() => this.checkboxValue = false, 2000);
          setTimeout(() => this.formValidation.reset(), 2000);
          setTimeout(() => this.submitControl = false, 2000);
        }
        else if (!res.isSuccess) {
          console.log("Sunucu Tarafından Başarısız Oldu.");
        }
        else {
          console.log("Bağlanamadı");
        }
      });
    }
  }
}
