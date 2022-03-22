interface ApiResult {
  incomplete_results: boolean;
  items: ApiItems[];
  total_count: number;
}
interface UserInfo {
  avatar_url: string;
  html_url: string;
  login: string;
  [key: string]: string;
}
interface ApiItems {
  id: number;
  full_name: string;
  created_at: string;
  updated_at: string;
  html_url: string;
  owner: UserInfo;
  description: string;
  [key: string]: any;
}
