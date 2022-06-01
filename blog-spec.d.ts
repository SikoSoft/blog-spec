export interface BlogContext {
  id: string;
}

export interface DatabaseTableColumn {
  id: string;
  type: string;
  dataType?: string;
  default?: number | string;
  maxLength?: number;
  primary?: boolean;
  autoIncremenet?: boolean;
}

export interface DatabaseTable {
  id: string;
  attributes: [DatabaseTableColumn];
}

export declare const contexts: Array<BlogContext>;
export declare const errorCodes: Record<string, number>;
export declare const rights: Array<any>;
export declare const roles: Array<any>;
export declare const settings: Array<any>;
export declare const typeMap: Object;
