
export type TUser = {
    name: string;
    email: string;
    password: string;
    isDeleted?: false;
    role?: "user" | "admin";
    passwordChengeAt?: Date;
    status?: "actived" | "deactivate";
  };