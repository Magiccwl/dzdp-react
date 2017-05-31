import { get } from '../get'

export function getAdData(){
  return get('api/homead');
}

export function getListData(city, page){

  var result = get('/api/homelist/' + encodeURIComponent(city) + '/' +page);
  console.log(result);
  return result;

}
