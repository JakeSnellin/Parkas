import { request, gql, GraphQLClient } from 'graphql-request';

const endpoint = 'https://api-eu-west-2.hygraph.com/v2/cl7oqf56l3imn01t734v4f3r6/master';

const graphQLClient = new GraphQLClient(endpoint, {
  headers: {
    authorization: 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2NjIzOTI2OTYsImF1ZCI6WyJodHRwczovL2FwaS1ldS13ZXN0LTIuaHlncmFwaC5jb20vdjIvY2w3b3FmNTZsM2ltbjAxdDczNHY0ZjNyNi9tYXN0ZXIiLCJtYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiODhkM2JiMmQtYjRjMy00OWM1LWE3ZWEtYzk2ZWVhZjVkYzk0IiwianRpIjoiY2w3b3hvdHhjM3ByZjAxdW04YmdlN3VhayJ9.NhawLPNYCpeQrtrZz-vaRRbAEgsT-27340i9BnyxnZ7b1leno92q41rFCCOY1ZuD8a9_EQ8qM_xAG_QJ1c7OlfafPOThP3XqYMN5tYUUqyW6p-a0QqP1lKqsO4cW84yc4lNLnl3LQSdLDtE1lhO1v51bDOWly4_XdFsJ1FMiLgR81F_kLcmCAoUDS3IezOSmLIlTEbs9ZuYIAATIyUbEFC3cbXUO-QZiF2CiHtewFx5ZiSLgXpmdOL-3wbFHOtCOtFIR3wu87plrClHdi5D-aDrM7XHZFdic2OGPW1EBz82r8xCGjLmuSZYSSnbCg9jXUsE27dPN3xE1tWuV3FZqUokoyeTxwvH55w5q-fEDQgkqk2kl3UEM9v0nXS9fUhTwJQVckscjd_Qs1US852Wdn8WoVcExby0Ghfm_wFLTPtyF4kLFki5I3ilOYqvJKMw9cyqTf63cARfK1clJciQWL9oqxKplLnodJb6O9spr9_guhxDFtN-VLhqiG1nxZBrd9ZAnU0PP2wJjAYAXbgmHv6qFFxK8r347ZBd0HbUkQ9-a3Fzs0jo6bPEFpXPWFUqirTs0jWXMyfl8jC5C88JO1FGm0AiGStSZUfaBbWXg3P9GTrov2hYOqVYh2VuesejIfrTH_oOkQiCUAAoMgFD98ib63fLI-QmFpplRWQRPt6w'
  }
})

export async function getLogo(onSuccess){
  const query = gql`
    query logo {
      homePage(where: {id: "cl7q351fzdxi30bmmr89fa1kw"}) {
      logo {
        id
        url
      }
    }
  }`

  const data = await graphQLClient.request(query);
  onSuccess(data.homePage.logo.url);
}

export async function getIcon(onSuccess){
  const query = gql`
  query icon {
    homePage(where: {id: "cl7q351fzdxi30bmmr89fa1kw"}) {
    icon {
      id
      url
    }
  }
}`

  const data = await graphQLClient.request(query);
  onSuccess(data.homePage.icon.url);
}

export async function getNameLabels(onSuccess){
  const query = gql`
  query nameLabels {
    homePage (where: {id: "cl7q351fzdxi30bmmr89fa1kw"}){
      nameLabels{
        url
      }
    }
  }`

  const data = await graphQLClient.request(query);
  onSuccess(data.homePage.nameLabels);
}

export async function getArtist(onSuccess){

  const query = gql`
  query artists {
    artists{
      slug
      name
      nameLabel {
        url
      }
      artistImage{
        url
      }
    }
  }`

  const data = await graphQLClient.request(query);
  onSuccess(data.artists.map((artist) => ({
    images: artist.artistImage,
    slug: artist.slug,
    nameLabel: artist.nameLabel.url,
    name: artist.name
  })))
}

export async function getBio(slugObj, onSuccess){
  const query = gql`
  query bio ($slug: String!){
    artists(where: {slug: $slug}){
     bio {
       id
       name
       bioImage{
         id
         url
       }
       artistDescription
       credits
       quotes
       socialMediaLinks
       galleryImage {
         id
         url
       }
       discoverLink
     }
   }
 }
  `

  const data = await graphQLClient.request(query, slugObj.variables);
  onSuccess(data);
}

export async function getCloseButton(onSuccess){
  const query = gql`
  query assets {
    asset(where: {id: "cl7swsxxf05qn0cmn3qiasljt"}) {
      id
      url
    }
  }`

  const data = await graphQLClient.request(query);
  onSuccess(data.asset.url);
}

/*export async function getHeaderGraphic(onSuccess){
  const query = gql`
  query headerGraphics {
    bioHeader (where: {id: "cl7t7laxq13oh0cmqobm6c0ze"}) {
      headerGraphic{
        url
      }
    }
  }`

  const data = await graphQLClient.request(query);
  onSuccess(data.bioHeader.headerGraphic); //array of images
}*/

export async function getEyesGraphic(onSuccess){
  const query = gql`
  query eyesGraphic {
    asset (where: {id: "cl7ylshdb49pj0dmlqokls178"}){
      url
    }
  }`

  const data = await graphQLClient.request(query);
  onSuccess(data.asset.url);
}


export async function getBioImages(slugObj, onSuccess){
  const query = gql`
  query bioImage ($slug: String!) {
    bio (where: {slug: $slug}) {
      bioImage {
        url
      }
    }
  }
  `
  const data = await graphQLClient.request(query, slugObj.variables);
  onSuccess(data.bio.bioImage);
}

export async function getBioBackgroundTop(onSuccess){
  const query = gql`
  query bioBackgroundTop {
    bioBackgroundTop (where: {id: "cl7ua3hm50sae0cjq0qkhsktj"}){
      bioBackground{
        url
      }
    }
  }`
  const data = await graphQLClient.request(query);
  onSuccess(data.bioBackgroundTop.bioBackground);
}

export async function getDiscoverSticker(onSuccess){
  const query = gql`
  query sticker {
    asset (where: {id: "cl7ucxz1p0v3q0dml9hkz5kzw"}){
        url
    }
  }`

  const data = await graphQLClient.request(query);
  onSuccess(data.asset.url);
} 

export async function getScrollSticker(onSuccess){
  const query = gql`
  query scrollSticker {
    asset (where: {id: "cl81rl0yy1oxh0blcbx1llqk0"}) {
       url
   }
 }`

  const data = await graphQLClient.request(query);
  onSuccess(data.asset.url);
} 

export async function getTabletGraphic(onSuccess){
  const query = gql`
  query tabletGraphic {
    asset (where: {id: "cl7zcmwdo5l5y0dml30if31do"}) {
       url
   }
 }`

  const data = await graphQLClient.request(query);
  onSuccess(data.asset.url);
}


export async function getlinksBackground(onSuccess){
  const query = gql`
  query linksBackground {
    asset (where: {id: "cl81ufwl11v620bmjc5mid9r6"}) {
       url
   }
 }`

  const data = await graphQLClient.request(query);
  onSuccess(data.asset.url);
}

