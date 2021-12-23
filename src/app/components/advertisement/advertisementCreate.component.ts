import { Component, OnInit } from '@angular/core';
import { AdvertisementsService } from 'src/app/services/advertisements.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'advertisement-create-form',
  templateUrl: './advertisement-create.component.html',
})
export class AdvertisementCreateComponent implements OnInit {
  advertisement = {
    description: '',
    isActive: true,
    likes: 0,
    //(part-time, full-time, remote) - can be full-time and remote at the same time, so object
    jobType: {},
    // Administration, Development, Quality Assurance )
    category: '',
  };
  submitted = false;

  constructor(private advertisementService: AdvertisementsService) {}

  ngOnInit(): void {}

  //fuck dat shit mate, just check what we do with the agents / users page

  createAdvertisement(): void {
    const data = {
      id: uuidv4(),
      description: this.advertisement.description,
      isActive: this.advertisement.isActive,
      likes: this.advertisement.likes,
      jobType: {},
    };
    this.advertisementService.create(data).subscribe(
      () => {
        this.submitted = true;
      },
      (error) => console.log(error);
    );
  }
}
