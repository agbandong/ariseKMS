type DateTime = string;

export type Nullable<T> = T | null;

export interface Team {
  id: number;
  name: string;
  personal_team: boolean;
  created_at: DateTime;
  updated_at: DateTime;
}

export interface User {
  id: number;
  name: string;
  email: string;
  current_team_id: Nullable<number>;
  profile_photo_path: Nullable<string>;
  profile_photo_url: string;
  two_factor_enabled: boolean;
  email_verified_at: Nullable<DateTime>;
  created_at: DateTime;
  updated_at: DateTime;
}

export type InertiaSharedProps<T = {}> = T & {
  jetstream: {
    canCreateTeams: boolean;
    canManageTwoFactorAuthentication: boolean;
    canUpdatePassword: boolean;
    canUpdateProfileInformation: boolean;
    flash: any;
    hasAccountDeletionFeatures: boolean;
    hasApiFeatures: boolean;
    hasTeamFeatures: boolean;
    hasTermsAndPrivacyPolicyFeature: boolean;
    managesProfilePhotos: boolean;
  };
  user: User & {
    all_teams?: Team[];
    current_team?: Team;
  };
  errorBags: any;
  errors: any;
};

export interface Session {
  id: number;
  ip_address: string;
  is_current_device: boolean;
  agent: {
    is_desktop: boolean;
    platform: string;
    browser: string;
  };
  last_active: DateTime;
}

export interface ApiToken {
  id: number;
  name: string;
  abilities: string[];
  last_used_ago: Nullable<DateTime>;
  created_at: DateTime;
  updated_at: DateTime;
}

export interface JetstreamTeamPermissions {
  canAddTeamMembers: boolean;
  canDeleteTeam: boolean;
  canRemoveTeamMembers: boolean;
  canUpdateTeam: boolean;
}

export interface Role {
  key: string;
  name: string;
  permissions: string[];
  description: string;
}

export interface TeamInvitation {
  id: number;
  team_id: number;
  email: string;
  role: Nullable<string>;
  created_at: DateTime;
  updated_at: DateTime;
}

export interface Project {
  id : number;
  name: string;
  project_files_path: string;
  created_at: DateTime;
  updated_at: DateTime;
}

export interface ProjectInvitation {
  id : number;
  name: string;
  email: string;
  project_files_path: string;
  created_at: DateTime;
  updated_at: DateTime;
}

export interface ProjectPermissions {
  canAddProjectMembers: boolean;
  canDeleteProject: boolean;
  canRemoveProjectMembers: boolean;
  canUpdateProject: boolean;
}

export interface Organization {
  id: number;
  name: string;
  companyCountry : string;
  headquartersCountry : string;
  legalCompanyCountry : string;
  //hasProof : boolean;
  //registrationProofsPath : string;
  //companyFax : Nullable<number>;
  //website : string;
  isTradeOrg : boolean;
  isInTradeAssociation :boolean;
  exchangeName : Nullable<string>;
  exchangeSymbol : Nullable<string>;
  //isSubsidiary : Nullable<string>;
  numberEmployees : number;
  //pastAnnualRevenue : number;
  descriptionBusinessAndActivities : string;
  //countryFocus : Nullable<string>;
  //currentEngagementPath : string;
  sector : string;
  /*Legal representative*/
  //legalRepresentativeCountry : string;
  //legalRepresentativeStreet : string;
  //legalRepresentativeCity : string;
  //legalRepresentativeProvinceState : string;
  //legalRepresentativePostZipCode : string;
  //legalRepresentativePhone : number;
  /*Primary contact*/
  contactCountry : string;
  contactStreet : string;
  contactCity : string;
  contactProvinceState : string;
  contactPostZipCode : string;
  contactPhone : number;
  created_at: DateTime;
  updated_at: DateTime;
}