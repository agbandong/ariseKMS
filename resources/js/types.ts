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
  company_country : string;
  headquarters_country : string;
  legal_company_country : string;
  //has_proof : boolean;
  //registration_proofs_path : string;
  //registration_proofs_excuse : Nullable<string>;
  //company_fax : Nullable<number>;
  //website : string;
  is_trade_org : boolean;
  is_in_trade_association :boolean;
  is_in_business_alliance: boolean;
  exchange_name : Nullable<string>;
  exchange_symbol : Nullable<string>;
  is_subsidiary_details : Nullable<string>;
  number_employees : number;
  past_annual_revenue : number;
  description_business_and_activities : string;
  country_focus : Nullable<string>;
  //current_engagement_path : string;
  sector : string;
  /*Legal representative*/
  //legal_reprentative_country : string;
  //legal_reprentative_street : string;
  //legal_reprentative_city : string;
  //legal_reprentative_province_state : string;
  //legal_reprentative_post_zip_code : string;
  //legal_representative_phone : number;
  /*Primary contact*/
  //contact_country : string;
  //contact_street : string;
  //contact_city : string;
  //contact_province_state : string;
  //contact_post_zip_code : string;
  //contact_phone : number;
  //created_at: DateTime;
  //updated_at: DateTime;
}