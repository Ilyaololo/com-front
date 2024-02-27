interface IntercomSettings {
  app_id: string;
  email?: string;
  user_id?: string;
  created_at?: number;
}

interface Intercom {
  (command: 'boot', settings: IntercomSettings): void;
  (command: 'shutdown'): void;
  (command: 'update'): void;
  (command: 'hide'): void;
  (command: 'show'): void;
  (command: 'showSpace', spaceName: string): void;
  (command: 'showMessages'): void;
  (command: 'showNewMessage'): void;
}

declare var Intercom: Intercom;

declare var intercomSettings: IntercomSettings;
