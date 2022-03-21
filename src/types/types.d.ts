interface ApiResult {
  incomplete_results: boolean;
  items: ApiItems[];
  total_count: number;
}
interface ApiItems {
  id: number;
  full_name: string;
  created_at: string;
  updated_at: string;
  html_url: string;
  [key: string]: any;
}
