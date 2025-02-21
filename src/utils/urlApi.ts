

const baseUrl = 'http://ec2-3-76-10-130.eu-central-1.compute.amazonaws.com:4003/api/v1/';

export const urlApi = {
  user:{
    signUp:baseUrl + 'auth/signup',
    signIn:baseUrl + 'auth/signing',
    currentUser:baseUrl + 'users/@me',
    allUsers:baseUrl + 'users',
    editRoleUser:(id:number)=>baseUrl + 'users/role/'+id,
  },
  post:{
    getOrCreatPosts:baseUrl + 'posts',
    onePost:(id:number)=>baseUrl + 'posts/'+id,
    updatePost:(id:number)=>baseUrl + 'posts/'+id,

  },
  categories:{
    getOrCreateCategories:baseUrl + 'categories',
    slugCategories:(slug:string)=>baseUrl + 'categories/s/'+slug,
    oneCategories:(id:number)=>baseUrl + 'categories/'+id,
    updateCategories:(id:number)=>baseUrl + 'categories/'+id,
  },
  comment:{
    getOrCreateComments:baseUrl + 'comments',
    oneComment:(id:number)=>baseUrl + 'comments/'+id,
    deleteComment:(id:number)=>baseUrl + 'comments/'+id,
  }




}

export const urlImg = (nameImge:string)=>'http://ec2-3-76-10-130.eu-central-1.compute.amazonaws.com:4003/uploads/posts/'+(nameImge)