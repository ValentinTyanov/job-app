export class Advertisement {
    id?: string;
    title: string;
    description: string;
    salaryRange: number;
    likes?: number;
    jobType: {
        hours: 'partTime' | 'fullTime',
        remote
    };
    category: 'officeAdministration' | 'development' | 'qualityAssurance';
    applications?: {
        id?,
        applicantId,
        status
    }
}

export enum AdvertisementStatus {
    ACTIVE,
    INACTIVE
}
