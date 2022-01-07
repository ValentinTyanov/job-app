export class Advertisement {
    id?: string;
    title: string;
    description: string;
    salaryRange: string;
    likes?: number;
    jobType: {
        hours: 'partTime' | 'fullTime',
        remote?: boolean
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
