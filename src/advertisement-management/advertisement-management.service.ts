import { Injectable } from '@angular/core';
import { Advertisement } from './definitions/advertisement';

@Injectable()
export class AdvertisementManagementService {
    private fs = require("fs");

    private advertisements = '../app/database/advertisements.json';

    getAdvertisements() {
        return this.fs.readFileSync(this.advertisements);
    }

    getAdvertisement(id: number) {
        return this.getAdvertisements().filter(a => a.id === id);
    }

    // this is called on click of create button
    createAdvertisement(advertisement: Advertisement) {
        this.fs.writeFileSync(this.advertisements, advertisement);
    }

    updateAdvertisement(advertisement: Advertisement) {
        let advertisements = this.getAdvertisements();
        let indexStart = advertisements.indexOf("[");
        let indexEnd = advertisements.indexOf("]");
        let tempAdds = advertisements.slice(indexStart, indexEnd);
        tempAdds.forEach((element) => {
            let removeIndex = advertisements.map((a) =>
                a["id"]).indexOf(element["id"]);
            advertisements.splice(removeIndex, 1);
            //TODO: IT DOESN'T EVEN DELETE! WE'RE NOT USING advertisement.id anywhere, so make use of it...
            //TODO: THIS ACTUALLY DELETES, DOESN'T UPDATE!!!! MOVE IT TO DELETE
        });

        //TODO: NEED TO WRITE THE RESULT BACK TO THE FILE AFTER UPDATING THE VALUES HERE...
    }

    deleteAdvertisement(id: number) {
        // return this.http.delete<void>(`/advertisements/${id}`);
    }
}