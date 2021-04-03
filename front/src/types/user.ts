export declare namespace User{
  namespace Create{ //данные,которые посылаем
    interface Param{
      login: string;
      email: string;
      password: string;
      passwordConfirm: string;
    }
  }

  interface Data { //данные которые получаем
    id: number;
    login: string;
    email: string;
    enable: boolean;
    createdAt: string; // Format: 2021-03-30T15:13:16.000Z,
    updateAt: string; // Format: 2021-03-30T15:13:16.000Z
  }
}
