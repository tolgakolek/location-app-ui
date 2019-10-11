import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Floors } from '../../../core/models/floors.models';
import { Block } from '../../../core/models/block.models';
import { BlockService } from 'src/app/core/services/block.service';
import { BuildService } from 'src/app/core/services/build.service';
import { FloorService } from 'src/app/core/services/floor.service';
import { Build } from 'src/app/core/models/build.models';
import { ActivatedRoute, Router } from '@angular/router';
import { build$ } from 'protractor/built/element';
import { empty } from 'rxjs';



@Component({
  selector: 'app-update-floor',
  templateUrl: './update-floor.component.html',
  styleUrls: ['./update-floor.component.scss']
})
export class UpdateFloorComponent implements OnInit {

  // bread crumb items
  breadCrumbItems: Array<{}>;
  formValidation: FormGroup;
  submitControl: boolean;
  floor: Floors;
  floorId;
  blocks: Block[] = [];
  builds: Build[] = [];
  buildId: number;
  blockId: number;
  checkboxValue = false;
  success = false;

  constructor(public formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router, private blockService: BlockService, private buildService: BuildService, private floorService: FloorService) { }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Ana Sayfa', path: '/' }, { label: 'Yeni Kat', path: '/', active: true }];
    this.formValidation = this.formBuilder.group({
      floorName: ['', [Validators.required]],
      floorMap: ['', [Validators.required]],
      floorOther: ['', [Validators.required]],
    });
    this.blockService.getAll().subscribe(data => {
      this.blocks = data;
    });
    this.buildService.getAll().subscribe(data => {
      this.builds = data;
    });
    this.getFloorById();
    this.submitControl = false;
  }

  get basic() {
    return this.formValidation.controls;
  }

  setBuildId(buildId: any) {
    this.buildId = buildId;
  }
  setBlockId(blockId: any) {
    this.blockId = blockId;
  }

  submit() {
    this.submitControl = true;
    if (this.formValidation.status == "VALID") {
      this.floor = {
        name: this.formValidation.value.floorName,
        map: this.formValidation.value.floorMap,
        other: this.formValidation.value.floorOther,
        active: this.checkboxValue,
        id: this.floorId
      };
      if (this.blockId != 0) {
        this.buildId = 0;
      }
      else {
        this.blockId = 0;
      }
      this.floorService.update(this.floor, this.blockId, this.buildId).subscribe(res => {
        if (res.isSuccess) {
          this.success = true;
          setTimeout(() => this.success = false, 500);
          setTimeout(() => this.router.navigate(['/floor/list']), 1000);
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
  getFloorById(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.floorService.getById(id)
      .subscribe(floor => {
        this.floor = floor;
        this.floorId = floor.id;
        this.checkboxValue = floor.active;
        try {
          this.buildId = floor.block.build.id;
        }
        catch {

          this.buildId = floor.build.id;
        }
        try {
          this.blockId = floor.block.id;
        }
        catch {

          this.blockId = 0;
        }
      });
  }
}
