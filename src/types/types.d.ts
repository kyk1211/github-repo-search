interface RepoResult {
  incomplete_results: boolean;
  items: RepoItems[];
  total_count: number;
}

interface IssueResult extends RepoResult {
  items: IssueItems[];
}

interface UserInfo {
  avatar_url: string;
  html_url: string;
  login: string;
  id: number;
  [key: string]: string;
}

interface RepoItems {
  id: number;
  full_name: string;
  created_at: string;
  updated_at: string;
  html_url: string;
  owner: UserInfo;
  description: string;
  [key: string]: any;
}

interface IssueItems {
  title: string;
  created_at: string;
  updated_at: string;
  closed_at: string | null;
  id: number;
  number: number;
  html_url: string;
  user: UserInfo;
  body: string;
  state: string;
  [key: string]: any;
}
