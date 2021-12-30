export class Advertisement {
    id: string;
    title: string;
    description: string;
    likes: number;
    jobType: {
        partTime,
        fullTime,
        remote
    };
    category: {
        officeAdministration,
        development,
        qualityAssurance
    };
    applications?: {
        id?,
        applicantId,
        status
    }
}

export enum AdvertisementStatus {
    ACTIVE,
    INACTIVE,
}
