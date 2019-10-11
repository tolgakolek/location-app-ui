import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Floors } from '../../../core/models/floors.models';
import { Block } from '../../../core/models/block.models';
import { BlockService } from 'src/app/core/services/block.service';
import { BuildService } from 'src/app/core/services/build.service';
import { FloorService } from 'src/app/core/services/floor.service';
import { Build } from 'src/app/core/models/build.models';



@Component({
  selector: 'app-add-floor',
  templateUrl: './add-floor.component.html',
  styleUrls: ['./add-floor.component.scss']
})
export class AddFloorComponent implements OnInit {

  // bread crumb items
  breadCrumbItems: Array<{}>;
  formValidation: FormGroup;
  submitControl: boolean;
  floor: Floors;
  blocks: Block[] = [];
  builds: Build[] = [];
  buildId= 0;
  blockId= 0;
  checkboxValue = false;
  success = false;

  constructor(public formBuilder: FormBuilder, private blockService: BlockService, private buildService: BuildService, private floorService: FloorService) { }

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
        active: this.checkboxValue
      };
      if (this.blockId != 0) {
        this.buildId=0;
      }
      else {
        this.blockId=0;
      }
      this.floorService.save(this.floor, this.blockId, this.buildId).subscribe(res => {
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
