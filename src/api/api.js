import axios from "./axios"

export const getList=()=>{
    return axios("/showcase/goodsList.json?goodsIds=508363198%2C542140256%2C505785309%2C538603472%2C538606117%2C503967646%2C493691129%2C527323701%2C492164967%2C491976337",{
        params : {
          tagId: 108071946,
          tagId: "",
          page: 1,
          pageSize: 6,
          goodsFrom: 0,
          isAdv: 0,
          offlineId: 0,
          goodsNumber: 6,
          json: 1,
          kdt_id:17879790 
        }
      })
}

export const getPeishiList=()=>{
  return axios("/showcase/goodsList.json?goodsIds=488832511%2C426862811%2C426864459%2C316900772%2C427327270%2C488848008",{
      params : {
        tagId: "",
        page: 1,
        pageSize: 6,
        goodsFrom: 0,
        isAdv: 0,
        offlineId: 0,
        goodsNumber: 6,
        json: 1,
        kdt_id:17879790 
      }
    })
}

export const getHotList=(tagId,pageSize,goodsNumber)=>{
  return axios("/showcase/goodsList.json",{
      params : {
        tagId,
        page: 1,
        pageSize,
        goodsIds:"", 
        goodsFrom: 1,
        isAdv: 0,
        offlineId: 0,
        goodsNumber,
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






export const getBlankMoretList=()=>{
  return axios("/goods-api/goodsByTagAlias.json",{
    params : {
      pageSize: 20,
      page: 1,
      offlineId: 0,
      order: "",
      json: 1,
      alias: "jptgo4o71",
      kdt_id:17879790 
    }
  })
}
