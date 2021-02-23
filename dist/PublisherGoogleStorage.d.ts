import { PublisherOptions } from "@electron-forge/publisher-base";
export interface PublisherConfig {
    /** Google Cloud project ID */
    projectId?: string;
    /** Google Cloud storage bucket */
    bucket: string;
    /** Alternative download URL if using CNAME over Cloud Storage domain. */
    storageUrl?: string;
    /** Make uploaded artifacts and manifest public (default: false) */
    public?: boolean;
}
export default class PublisherGoogleStorage {
    config: PublisherConfig;
    providedPlatforms?: string[];
    constructor(config: PublisherConfig, providedPlatforms?: string[]);
    get platforms(): string[];
    get name(): string;
    publish({ makeResults }: PublisherOptions): Promise<void>;
}
