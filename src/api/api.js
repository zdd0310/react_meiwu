import axios from "./axios"

export const getList=()=>{
    return axios("/showcase/goodsList.json",{
        params : {
          tagId: 108071946,
          page: 1,
          pageSize: 8,
          goodsIds: "",
          goodsFrom: 1,
          isAdv: 0,
          offlineId: 0,
          goodsNumber: 8,
          json: 1,
          kdt_id:17879790 
        }
      })
}

export const getClassifyMustList=()=>{
  return axios("/goods-api/goodsByTagAlias.json",{
    params:{
      pageSize: 10,
      page: 1,
      alias: "yzdq8psb",
      offlineId: 0,
      json: 1,
      kdt_id:17879790
    }
  })
}

export const getFengweiList=(alias)=>{
  return axios("/goods-api/goodsByTagAlias.json",{
    params:{
      pageSize: 10,
      page: 1,
      alias: alias,
      offlineId: 0,
      json: 1,
      kdt_id:17879790
    }
  })
}

export const getClassifyNewList=()=>{
  return axios("/goods-api/goodsByTagAlias.json",{
    params:{
      pageSize: 10,
      page: 1,
      alias: "gox93q9x",
      offlineId: 0,
      json: 1,
      kdt_id:17879790
    }
  })
} 

export const getSportList=()=>{
  return axios("/showcase/goodsList.json",{
    params : {
      tagId: 108072009,
      page: 1,
      pageSize: 10,
      goodsIds: "",
      goodsFrom: 1,
      isAdv: 0,
      offlineId: 0,
      goodsNumber: 50,
      json: 1,
      kdt_id:17879790 
    }
  })
}
