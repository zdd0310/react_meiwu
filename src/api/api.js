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