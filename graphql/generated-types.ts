export type Maybe<T> = T;
export type InputMaybe<T> = T;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  /** The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID. */
  ID: string;
  /** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
  String: string;
  /** The `Boolean` scalar type represents `true` or `false`. */
  Boolean: boolean;
  /** The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. */
  Int: number;
  /** The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point). */
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};

export type File = Node & {
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs: Maybe<Scalars['Float']>;
  blksize: Maybe<Scalars['Int']>;
  blocks: Maybe<Scalars['Int']>;
  /** Copy file to static directory and return public url to it */
  publicURL: Maybe<Scalars['String']>;
  /** Returns all children nodes filtered by type ImageSharp */
  childrenImageSharp: Maybe<Array<Maybe<ImageSharp>>>;
  /** Returns the first child node of type ImageSharp or null if there are no children of given type on this node */
  childImageSharp: Maybe<ImageSharp>;
  id: Scalars['ID'];
  parent: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type FileModifiedTimeArgs = {
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  difference: InputMaybe<Scalars['String']>;
  locale: InputMaybe<Scalars['String']>;
};


export type FileAccessTimeArgs = {
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  difference: InputMaybe<Scalars['String']>;
  locale: InputMaybe<Scalars['String']>;
};


export type FileChangeTimeArgs = {
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  difference: InputMaybe<Scalars['String']>;
  locale: InputMaybe<Scalars['String']>;
};


export type FileBirthTimeArgs = {
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  difference: InputMaybe<Scalars['String']>;
  locale: InputMaybe<Scalars['String']>;
};


export type FileAtimeArgs = {
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  difference: InputMaybe<Scalars['String']>;
  locale: InputMaybe<Scalars['String']>;
};


export type FileMtimeArgs = {
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  difference: InputMaybe<Scalars['String']>;
  locale: InputMaybe<Scalars['String']>;
};


export type FileCtimeArgs = {
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  difference: InputMaybe<Scalars['String']>;
  locale: InputMaybe<Scalars['String']>;
};

/** Node Interface */
export type Node = {
  id: Scalars['ID'];
  parent: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type Internal = {
  content: Maybe<Scalars['String']>;
  contentDigest: Scalars['String'];
  description: Maybe<Scalars['String']>;
  fieldOwners: Maybe<Array<Maybe<Scalars['String']>>>;
  ignoreType: Maybe<Scalars['Boolean']>;
  mediaType: Maybe<Scalars['String']>;
  owner: Scalars['String'];
  type: Scalars['String'];
};

export type Directory = Node & {
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs: Maybe<Scalars['Float']>;
  id: Scalars['ID'];
  parent: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type DirectoryModifiedTimeArgs = {
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  difference: InputMaybe<Scalars['String']>;
  locale: InputMaybe<Scalars['String']>;
};


export type DirectoryAccessTimeArgs = {
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  difference: InputMaybe<Scalars['String']>;
  locale: InputMaybe<Scalars['String']>;
};


export type DirectoryChangeTimeArgs = {
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  difference: InputMaybe<Scalars['String']>;
  locale: InputMaybe<Scalars['String']>;
};


export type DirectoryBirthTimeArgs = {
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  difference: InputMaybe<Scalars['String']>;
  locale: InputMaybe<Scalars['String']>;
};


export type DirectoryAtimeArgs = {
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  difference: InputMaybe<Scalars['String']>;
  locale: InputMaybe<Scalars['String']>;
};


export type DirectoryMtimeArgs = {
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  difference: InputMaybe<Scalars['String']>;
  locale: InputMaybe<Scalars['String']>;
};


export type DirectoryCtimeArgs = {
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  difference: InputMaybe<Scalars['String']>;
  locale: InputMaybe<Scalars['String']>;
};

export type Site = Node & {
  buildTime: Maybe<Scalars['Date']>;
  siteMetadata: Maybe<SiteSiteMetadata>;
  port: Maybe<Scalars['Int']>;
  host: Maybe<Scalars['String']>;
  polyfill: Maybe<Scalars['Boolean']>;
  pathPrefix: Maybe<Scalars['String']>;
  jsxRuntime: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SiteBuildTimeArgs = {
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  difference: InputMaybe<Scalars['String']>;
  locale: InputMaybe<Scalars['String']>;
};

export type SiteSiteMetadata = {
  title: Maybe<Scalars['String']>;
  description: Maybe<Scalars['String']>;
  siteUrl: Maybe<Scalars['String']>;
};

export type SiteFunction = Node & {
  functionRoute: Scalars['String'];
  pluginName: Scalars['String'];
  originalAbsoluteFilePath: Scalars['String'];
  originalRelativeFilePath: Scalars['String'];
  relativeCompiledFilePath: Scalars['String'];
  absoluteCompiledFilePath: Scalars['String'];
  matchPath: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type SitePage = Node & {
  path: Scalars['String'];
  component: Scalars['String'];
  internalComponentName: Scalars['String'];
  componentChunkName: Scalars['String'];
  matchPath: Maybe<Scalars['String']>;
  pageContext: Maybe<Scalars['JSON']>;
  pluginCreator: Maybe<SitePlugin>;
  id: Scalars['ID'];
  parent: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type SitePlugin = Node & {
  resolve: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
  version: Maybe<Scalars['String']>;
  nodeAPIs: Maybe<Array<Maybe<Scalars['String']>>>;
  browserAPIs: Maybe<Array<Maybe<Scalars['String']>>>;
  ssrAPIs: Maybe<Array<Maybe<Scalars['String']>>>;
  pluginFilepath: Maybe<Scalars['String']>;
  pluginOptions: Maybe<Scalars['JSON']>;
  packageJson: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  parent: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type SiteBuildMetadata = Node & {
  buildTime: Maybe<Scalars['Date']>;
  id: Scalars['ID'];
  parent: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SiteBuildMetadataBuildTimeArgs = {
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  difference: InputMaybe<Scalars['String']>;
  locale: InputMaybe<Scalars['String']>;
};

export type SanityAboutSection = {
  _key: Maybe<Scalars['String']>;
  _type: Maybe<Scalars['String']>;
  text: Maybe<Scalars['String']>;
  images: Maybe<SanityResponsiveImages>;
  title: Maybe<Array<Maybe<SanityBlock>>>;
  _rawTitle: Maybe<Scalars['JSON']>;
  _rawImages: Maybe<Scalars['JSON']>;
};


export type SanityAboutSection_RawTitleArgs = {
  resolveReferences: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityAboutSection_RawImagesArgs = {
  resolveReferences: InputMaybe<SanityResolveReferencesConfiguration>;
};

export type SanityBlock = {
  _key: Maybe<Scalars['String']>;
  _type: Maybe<Scalars['String']>;
  children: Maybe<Array<Maybe<SanitySpan>>>;
  style: Maybe<Scalars['String']>;
  list: Maybe<Scalars['String']>;
  _rawChildren: Maybe<Scalars['JSON']>;
};


export type SanityBlock_RawChildrenArgs = {
  resolveReferences: InputMaybe<SanityResolveReferencesConfiguration>;
};

export type SanityBoxContent = {
  _key: Maybe<Scalars['String']>;
  _type: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
  quantity: Maybe<Scalars['Float']>;
};

export type SanityCategory = SanityDocument & Node & {
  _id: Maybe<Scalars['String']>;
  _type: Maybe<Scalars['String']>;
  _createdAt: Maybe<Scalars['Date']>;
  _updatedAt: Maybe<Scalars['Date']>;
  _rev: Maybe<Scalars['String']>;
  _key: Maybe<Scalars['String']>;
  orderRank: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
  slug: Maybe<SanitySlug>;
  image: Maybe<SanityMainImage>;
  _rawSlug: Maybe<Scalars['JSON']>;
  _rawImage: Maybe<Scalars['JSON']>;
  gatsbyPath: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SanityCategory_CreatedAtArgs = {
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  difference: InputMaybe<Scalars['String']>;
  locale: InputMaybe<Scalars['String']>;
};


export type SanityCategory_UpdatedAtArgs = {
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  difference: InputMaybe<Scalars['String']>;
  locale: InputMaybe<Scalars['String']>;
};


export type SanityCategory_RawSlugArgs = {
  resolveReferences: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityCategory_RawImageArgs = {
  resolveReferences: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityCategoryGatsbyPathArgs = {
  filePath: InputMaybe<Scalars['String']>;
};

/** A Sanity document */
export type SanityDocument = {
  _id: Maybe<Scalars['String']>;
  _type: Maybe<Scalars['String']>;
  _createdAt: Maybe<Scalars['Date']>;
  _updatedAt: Maybe<Scalars['Date']>;
  _rev: Maybe<Scalars['String']>;
};

export type SanityFile = {
  _key: Maybe<Scalars['String']>;
  _type: Maybe<Scalars['String']>;
  asset: Maybe<SanityFileAsset>;
  _rawAsset: Maybe<Scalars['JSON']>;
};


export type SanityFile_RawAssetArgs = {
  resolveReferences: InputMaybe<SanityResolveReferencesConfiguration>;
};

export type SanityGeopoint = {
  _key: Maybe<Scalars['String']>;
  _type: Maybe<Scalars['String']>;
  lat: Maybe<Scalars['Float']>;
  lng: Maybe<Scalars['Float']>;
  alt: Maybe<Scalars['Float']>;
};

export type SanityGlobalData = SanityDocument & Node & {
  _id: Maybe<Scalars['String']>;
  _type: Maybe<Scalars['String']>;
  _createdAt: Maybe<Scalars['Date']>;
  _updatedAt: Maybe<Scalars['Date']>;
  _rev: Maybe<Scalars['String']>;
  _key: Maybe<Scalars['String']>;
  logo: Maybe<SanityImage>;
  aboutSection: Maybe<SanityAboutSection>;
  footerCopy: Maybe<Scalars['String']>;
  _rawLogo: Maybe<Scalars['JSON']>;
  _rawAboutSection: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  parent: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SanityGlobalData_CreatedAtArgs = {
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  difference: InputMaybe<Scalars['String']>;
  locale: InputMaybe<Scalars['String']>;
};


export type SanityGlobalData_UpdatedAtArgs = {
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  difference: InputMaybe<Scalars['String']>;
  locale: InputMaybe<Scalars['String']>;
};


export type SanityGlobalData_RawLogoArgs = {
  resolveReferences: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityGlobalData_RawAboutSectionArgs = {
  resolveReferences: InputMaybe<SanityResolveReferencesConfiguration>;
};

export type SanityImage = {
  _key: Maybe<Scalars['String']>;
  _type: Maybe<Scalars['String']>;
  asset: Maybe<SanityImageAsset>;
  hotspot: Maybe<SanityImageHotspot>;
  crop: Maybe<SanityImageCrop>;
  _rawAsset: Maybe<Scalars['JSON']>;
  _rawHotspot: Maybe<Scalars['JSON']>;
  _rawCrop: Maybe<Scalars['JSON']>;
};


export type SanityImage_RawAssetArgs = {
  resolveReferences: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityImage_RawHotspotArgs = {
  resolveReferences: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityImage_RawCropArgs = {
  resolveReferences: InputMaybe<SanityResolveReferencesConfiguration>;
};

export type SanityMainImage = {
  _key: Maybe<Scalars['String']>;
  _type: Maybe<Scalars['String']>;
  asset: Maybe<SanityImageAsset>;
  hotspot: Maybe<SanityImageHotspot>;
  crop: Maybe<SanityImageCrop>;
  alt: Maybe<Scalars['String']>;
  _rawAsset: Maybe<Scalars['JSON']>;
  _rawHotspot: Maybe<Scalars['JSON']>;
  _rawCrop: Maybe<Scalars['JSON']>;
};


export type SanityMainImage_RawAssetArgs = {
  resolveReferences: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityMainImage_RawHotspotArgs = {
  resolveReferences: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityMainImage_RawCropArgs = {
  resolveReferences: InputMaybe<SanityResolveReferencesConfiguration>;
};

export type SanityProduct = SanityDocument & Node & {
  _id: Maybe<Scalars['String']>;
  _type: Maybe<Scalars['String']>;
  _createdAt: Maybe<Scalars['Date']>;
  _updatedAt: Maybe<Scalars['Date']>;
  _rev: Maybe<Scalars['String']>;
  _key: Maybe<Scalars['String']>;
  orderRank: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
  shortName: Maybe<Scalars['String']>;
  slug: Maybe<SanitySlug>;
  image: Maybe<SanityMainImage>;
  heroImages: Maybe<SanityResponsiveImages>;
  productImages: Maybe<SanityResponsiveImages>;
  previewImages: Maybe<SanityResponsiveImages>;
  featured: Maybe<Scalars['Boolean']>;
  featuredImages: Maybe<SanityResponsiveImages>;
  category: Maybe<SanityCategory>;
  new: Maybe<Scalars['Boolean']>;
  price: Maybe<Scalars['Float']>;
  description: Maybe<Scalars['String']>;
  includes: Maybe<Array<Maybe<SanityBoxContent>>>;
  gallery: Maybe<Array<Maybe<SanityResponsiveImages>>>;
  related: Maybe<Array<Maybe<SanityProduct>>>;
  features: Maybe<Array<Maybe<SanityBlock>>>;
  _rawSlug: Maybe<Scalars['JSON']>;
  _rawImage: Maybe<Scalars['JSON']>;
  _rawHeroImages: Maybe<Scalars['JSON']>;
  _rawProductImages: Maybe<Scalars['JSON']>;
  _rawPreviewImages: Maybe<Scalars['JSON']>;
  _rawFeaturedImages: Maybe<Scalars['JSON']>;
  _rawCategory: Maybe<Scalars['JSON']>;
  _rawFeatures: Maybe<Scalars['JSON']>;
  _rawIncludes: Maybe<Scalars['JSON']>;
  _rawGallery: Maybe<Scalars['JSON']>;
  _rawRelated: Maybe<Scalars['JSON']>;
  gatsbyPath: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SanityProduct_CreatedAtArgs = {
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  difference: InputMaybe<Scalars['String']>;
  locale: InputMaybe<Scalars['String']>;
};


export type SanityProduct_UpdatedAtArgs = {
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  difference: InputMaybe<Scalars['String']>;
  locale: InputMaybe<Scalars['String']>;
};


export type SanityProduct_RawSlugArgs = {
  resolveReferences: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityProduct_RawImageArgs = {
  resolveReferences: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityProduct_RawHeroImagesArgs = {
  resolveReferences: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityProduct_RawProductImagesArgs = {
  resolveReferences: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityProduct_RawPreviewImagesArgs = {
  resolveReferences: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityProduct_RawFeaturedImagesArgs = {
  resolveReferences: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityProduct_RawCategoryArgs = {
  resolveReferences: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityProduct_RawFeaturesArgs = {
  resolveReferences: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityProduct_RawIncludesArgs = {
  resolveReferences: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityProduct_RawGalleryArgs = {
  resolveReferences: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityProduct_RawRelatedArgs = {
  resolveReferences: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityProductGatsbyPathArgs = {
  filePath: InputMaybe<Scalars['String']>;
};

export type SanityResponsiveImages = {
  _key: Maybe<Scalars['String']>;
  _type: Maybe<Scalars['String']>;
  mobile: Maybe<SanityMainImage>;
  tablet: Maybe<SanityMainImage>;
  desktop: Maybe<SanityMainImage>;
  _rawMobile: Maybe<Scalars['JSON']>;
  _rawTablet: Maybe<Scalars['JSON']>;
  _rawDesktop: Maybe<Scalars['JSON']>;
};


export type SanityResponsiveImages_RawMobileArgs = {
  resolveReferences: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityResponsiveImages_RawTabletArgs = {
  resolveReferences: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityResponsiveImages_RawDesktopArgs = {
  resolveReferences: InputMaybe<SanityResolveReferencesConfiguration>;
};

export type SanityAssetSourceData = {
  _key: Maybe<Scalars['String']>;
  _type: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
  id: Maybe<Scalars['String']>;
  url: Maybe<Scalars['String']>;
};

export type SanityFileAsset = SanityDocument & Node & {
  _id: Maybe<Scalars['String']>;
  _type: Maybe<Scalars['String']>;
  _createdAt: Maybe<Scalars['Date']>;
  _updatedAt: Maybe<Scalars['Date']>;
  _rev: Maybe<Scalars['String']>;
  _key: Maybe<Scalars['String']>;
  originalFilename: Maybe<Scalars['String']>;
  label: Maybe<Scalars['String']>;
  title: Maybe<Scalars['String']>;
  description: Maybe<Scalars['String']>;
  altText: Maybe<Scalars['String']>;
  sha1hash: Maybe<Scalars['String']>;
  extension: Maybe<Scalars['String']>;
  mimeType: Maybe<Scalars['String']>;
  size: Maybe<Scalars['Float']>;
  assetId: Maybe<Scalars['String']>;
  path: Maybe<Scalars['String']>;
  url: Maybe<Scalars['String']>;
  source: Maybe<SanityAssetSourceData>;
  _rawSource: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  parent: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SanityFileAsset_CreatedAtArgs = {
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  difference: InputMaybe<Scalars['String']>;
  locale: InputMaybe<Scalars['String']>;
};


export type SanityFileAsset_UpdatedAtArgs = {
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  difference: InputMaybe<Scalars['String']>;
  locale: InputMaybe<Scalars['String']>;
};


export type SanityFileAsset_RawSourceArgs = {
  resolveReferences: InputMaybe<SanityResolveReferencesConfiguration>;
};

export type SanityImageAsset = SanityDocument & Node & {
  _id: Maybe<Scalars['String']>;
  _type: Maybe<Scalars['String']>;
  _createdAt: Maybe<Scalars['Date']>;
  _updatedAt: Maybe<Scalars['Date']>;
  _rev: Maybe<Scalars['String']>;
  _key: Maybe<Scalars['String']>;
  originalFilename: Maybe<Scalars['String']>;
  label: Maybe<Scalars['String']>;
  title: Maybe<Scalars['String']>;
  description: Maybe<Scalars['String']>;
  altText: Maybe<Scalars['String']>;
  sha1hash: Maybe<Scalars['String']>;
  extension: Maybe<Scalars['String']>;
  mimeType: Maybe<Scalars['String']>;
  size: Maybe<Scalars['Float']>;
  assetId: Maybe<Scalars['String']>;
  uploadId: Maybe<Scalars['String']>;
  path: Maybe<Scalars['String']>;
  url: Maybe<Scalars['String']>;
  metadata: Maybe<SanityImageMetadata>;
  source: Maybe<SanityAssetSourceData>;
  _rawMetadata: Maybe<Scalars['JSON']>;
  _rawSource: Maybe<Scalars['JSON']>;
  gatsbyImageData: Scalars['JSON'];
  id: Scalars['ID'];
  parent: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SanityImageAsset_CreatedAtArgs = {
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  difference: InputMaybe<Scalars['String']>;
  locale: InputMaybe<Scalars['String']>;
};


export type SanityImageAsset_UpdatedAtArgs = {
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  difference: InputMaybe<Scalars['String']>;
  locale: InputMaybe<Scalars['String']>;
};


export type SanityImageAsset_RawMetadataArgs = {
  resolveReferences: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityImageAsset_RawSourceArgs = {
  resolveReferences: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityImageAssetGatsbyImageDataArgs = {
  layout: InputMaybe<GatsbyImageLayout>;
  width: InputMaybe<Scalars['Int']>;
  height: InputMaybe<Scalars['Int']>;
  aspectRatio: InputMaybe<Scalars['Float']>;
  placeholder?: InputMaybe<SanityGatsbyImagePlaceholder>;
  formats?: InputMaybe<Array<InputMaybe<GatsbyImageFormat>>>;
  outputPixelDensities: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  breakpoints: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  sizes: InputMaybe<Scalars['String']>;
  backgroundColor: InputMaybe<Scalars['String']>;
  fit?: InputMaybe<SanityImageFit>;
};

export type SanityGatsbyImagePlaceholder =
  | 'DOMINANT_COLOR'
  | 'BLURRED'
  | 'NONE';

export type SanityImageFit =
  | 'CLIP'
  | 'CROP'
  | 'FILL'
  | 'FILLMAX'
  | 'MAX'
  | 'SCALE'
  | 'MIN';

export type SanityImageCrop = {
  _key: Maybe<Scalars['String']>;
  _type: Maybe<Scalars['String']>;
  top: Maybe<Scalars['Float']>;
  bottom: Maybe<Scalars['Float']>;
  left: Maybe<Scalars['Float']>;
  right: Maybe<Scalars['Float']>;
};

export type SanityImageDimensions = {
  _key: Maybe<Scalars['String']>;
  _type: Maybe<Scalars['String']>;
  height: Maybe<Scalars['Float']>;
  width: Maybe<Scalars['Float']>;
  aspectRatio: Maybe<Scalars['Float']>;
};

export type SanityImageHotspot = {
  _key: Maybe<Scalars['String']>;
  _type: Maybe<Scalars['String']>;
  x: Maybe<Scalars['Float']>;
  y: Maybe<Scalars['Float']>;
  height: Maybe<Scalars['Float']>;
  width: Maybe<Scalars['Float']>;
};

export type SanityImageMetadata = {
  _key: Maybe<Scalars['String']>;
  _type: Maybe<Scalars['String']>;
  location: Maybe<SanityGeopoint>;
  dimensions: Maybe<SanityImageDimensions>;
  palette: Maybe<SanityImagePalette>;
  lqip: Maybe<Scalars['String']>;
  blurHash: Maybe<Scalars['String']>;
  hasAlpha: Maybe<Scalars['Boolean']>;
  isOpaque: Maybe<Scalars['Boolean']>;
  _rawLocation: Maybe<Scalars['JSON']>;
  _rawDimensions: Maybe<Scalars['JSON']>;
  _rawPalette: Maybe<Scalars['JSON']>;
};


export type SanityImageMetadata_RawLocationArgs = {
  resolveReferences: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityImageMetadata_RawDimensionsArgs = {
  resolveReferences: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityImageMetadata_RawPaletteArgs = {
  resolveReferences: InputMaybe<SanityResolveReferencesConfiguration>;
};

export type SanityImagePalette = {
  _key: Maybe<Scalars['String']>;
  _type: Maybe<Scalars['String']>;
  darkMuted: Maybe<SanityImagePaletteSwatch>;
  lightVibrant: Maybe<SanityImagePaletteSwatch>;
  darkVibrant: Maybe<SanityImagePaletteSwatch>;
  vibrant: Maybe<SanityImagePaletteSwatch>;
  dominant: Maybe<SanityImagePaletteSwatch>;
  lightMuted: Maybe<SanityImagePaletteSwatch>;
  muted: Maybe<SanityImagePaletteSwatch>;
  _rawDarkMuted: Maybe<Scalars['JSON']>;
  _rawLightVibrant: Maybe<Scalars['JSON']>;
  _rawDarkVibrant: Maybe<Scalars['JSON']>;
  _rawVibrant: Maybe<Scalars['JSON']>;
  _rawDominant: Maybe<Scalars['JSON']>;
  _rawLightMuted: Maybe<Scalars['JSON']>;
  _rawMuted: Maybe<Scalars['JSON']>;
};


export type SanityImagePalette_RawDarkMutedArgs = {
  resolveReferences: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityImagePalette_RawLightVibrantArgs = {
  resolveReferences: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityImagePalette_RawDarkVibrantArgs = {
  resolveReferences: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityImagePalette_RawVibrantArgs = {
  resolveReferences: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityImagePalette_RawDominantArgs = {
  resolveReferences: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityImagePalette_RawLightMutedArgs = {
  resolveReferences: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityImagePalette_RawMutedArgs = {
  resolveReferences: InputMaybe<SanityResolveReferencesConfiguration>;
};

export type SanityImagePaletteSwatch = {
  _key: Maybe<Scalars['String']>;
  _type: Maybe<Scalars['String']>;
  background: Maybe<Scalars['String']>;
  foreground: Maybe<Scalars['String']>;
  population: Maybe<Scalars['Float']>;
  title: Maybe<Scalars['String']>;
};

export type SanitySlug = {
  _key: Maybe<Scalars['String']>;
  _type: Maybe<Scalars['String']>;
  current: Maybe<Scalars['String']>;
};

export type SanitySpan = {
  _key: Maybe<Scalars['String']>;
  _type: Maybe<Scalars['String']>;
  marks: Maybe<Array<Maybe<Scalars['String']>>>;
  text: Maybe<Scalars['String']>;
};

export type SanityResolveReferencesConfiguration = {
  /** Max depth to resolve references to */
  maxDepth: Scalars['Int'];
};

export type GatsbyImageFormat =
  | 'NO_CHANGE'
  | 'AUTO'
  | 'JPG'
  | 'PNG'
  | 'WEBP'
  | 'AVIF';

export type GatsbyImageLayout =
  | 'FIXED'
  | 'FULL_WIDTH'
  | 'CONSTRAINED';

export type GatsbyImagePlaceholder =
  | 'DOMINANT_COLOR'
  | 'TRACED_SVG'
  | 'BLURRED'
  | 'NONE';

export type ImageFormat =
  | 'NO_CHANGE'
  | 'AUTO'
  | 'JPG'
  | 'PNG'
  | 'WEBP'
  | 'AVIF';

export type ImageFit =
  | 'COVER'
  | 'CONTAIN'
  | 'FILL'
  | 'INSIDE'
  | 'OUTSIDE';

export type ImageLayout =
  | 'FIXED'
  | 'FULL_WIDTH'
  | 'CONSTRAINED';

export type ImageCropFocus =
  | 'CENTER'
  | 'NORTH'
  | 'NORTHEAST'
  | 'EAST'
  | 'SOUTHEAST'
  | 'SOUTH'
  | 'SOUTHWEST'
  | 'WEST'
  | 'NORTHWEST'
  | 'ENTROPY'
  | 'ATTENTION';

export type DuotoneGradient = {
  highlight: Scalars['String'];
  shadow: Scalars['String'];
  opacity: InputMaybe<Scalars['Int']>;
};

export type PotraceTurnPolicy =
  | 'TURNPOLICY_BLACK'
  | 'TURNPOLICY_WHITE'
  | 'TURNPOLICY_LEFT'
  | 'TURNPOLICY_RIGHT'
  | 'TURNPOLICY_MINORITY'
  | 'TURNPOLICY_MAJORITY';

export type Potrace = {
  turnPolicy: InputMaybe<PotraceTurnPolicy>;
  turdSize: InputMaybe<Scalars['Float']>;
  alphaMax: InputMaybe<Scalars['Float']>;
  optCurve: InputMaybe<Scalars['Boolean']>;
  optTolerance: InputMaybe<Scalars['Float']>;
  threshold: InputMaybe<Scalars['Int']>;
  blackOnWhite: InputMaybe<Scalars['Boolean']>;
  color: InputMaybe<Scalars['String']>;
  background: InputMaybe<Scalars['String']>;
};

export type ImageSharp = Node & {
  fixed: Maybe<ImageSharpFixed>;
  fluid: Maybe<ImageSharpFluid>;
  gatsbyImageData: Scalars['JSON'];
  original: Maybe<ImageSharpOriginal>;
  resize: Maybe<ImageSharpResize>;
  id: Scalars['ID'];
  parent: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ImageSharpFixedArgs = {
  width: InputMaybe<Scalars['Int']>;
  height: InputMaybe<Scalars['Int']>;
  base64Width: InputMaybe<Scalars['Int']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']>;
  pngCompressionSpeed?: InputMaybe<Scalars['Int']>;
  grayscale?: InputMaybe<Scalars['Boolean']>;
  duotone: InputMaybe<DuotoneGradient>;
  traceSVG: InputMaybe<Potrace>;
  quality: InputMaybe<Scalars['Int']>;
  jpegQuality: InputMaybe<Scalars['Int']>;
  pngQuality: InputMaybe<Scalars['Int']>;
  webpQuality: InputMaybe<Scalars['Int']>;
  toFormat?: InputMaybe<ImageFormat>;
  toFormatBase64?: InputMaybe<ImageFormat>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  fit?: InputMaybe<ImageFit>;
  background?: InputMaybe<Scalars['String']>;
  rotate?: InputMaybe<Scalars['Int']>;
  trim?: InputMaybe<Scalars['Float']>;
};


export type ImageSharpFluidArgs = {
  maxWidth: InputMaybe<Scalars['Int']>;
  maxHeight: InputMaybe<Scalars['Int']>;
  base64Width: InputMaybe<Scalars['Int']>;
  grayscale?: InputMaybe<Scalars['Boolean']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']>;
  pngCompressionSpeed?: InputMaybe<Scalars['Int']>;
  duotone: InputMaybe<DuotoneGradient>;
  traceSVG: InputMaybe<Potrace>;
  quality: InputMaybe<Scalars['Int']>;
  jpegQuality: InputMaybe<Scalars['Int']>;
  pngQuality: InputMaybe<Scalars['Int']>;
  webpQuality: InputMaybe<Scalars['Int']>;
  toFormat?: InputMaybe<ImageFormat>;
  toFormatBase64?: InputMaybe<ImageFormat>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  fit?: InputMaybe<ImageFit>;
  background?: InputMaybe<Scalars['String']>;
  rotate?: InputMaybe<Scalars['Int']>;
  trim?: InputMaybe<Scalars['Float']>;
  sizes?: InputMaybe<Scalars['String']>;
  srcSetBreakpoints?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};


export type ImageSharpGatsbyImageDataArgs = {
  layout?: InputMaybe<ImageLayout>;
  width: InputMaybe<Scalars['Int']>;
  height: InputMaybe<Scalars['Int']>;
  aspectRatio: InputMaybe<Scalars['Float']>;
  placeholder: InputMaybe<ImagePlaceholder>;
  blurredOptions: InputMaybe<BlurredOptions>;
  tracedSVGOptions: InputMaybe<Potrace>;
  formats: InputMaybe<Array<InputMaybe<ImageFormat>>>;
  outputPixelDensities: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  breakpoints: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  sizes: InputMaybe<Scalars['String']>;
  quality: InputMaybe<Scalars['Int']>;
  jpgOptions: InputMaybe<JpgOptions>;
  pngOptions: InputMaybe<PngOptions>;
  webpOptions: InputMaybe<WebPOptions>;
  avifOptions: InputMaybe<AvifOptions>;
  transformOptions: InputMaybe<TransformOptions>;
  backgroundColor: InputMaybe<Scalars['String']>;
};


export type ImageSharpResizeArgs = {
  width: InputMaybe<Scalars['Int']>;
  height: InputMaybe<Scalars['Int']>;
  quality: InputMaybe<Scalars['Int']>;
  jpegQuality: InputMaybe<Scalars['Int']>;
  pngQuality: InputMaybe<Scalars['Int']>;
  webpQuality: InputMaybe<Scalars['Int']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']>;
  pngCompressionLevel?: InputMaybe<Scalars['Int']>;
  pngCompressionSpeed?: InputMaybe<Scalars['Int']>;
  grayscale?: InputMaybe<Scalars['Boolean']>;
  duotone: InputMaybe<DuotoneGradient>;
  base64?: InputMaybe<Scalars['Boolean']>;
  traceSVG: InputMaybe<Potrace>;
  toFormat?: InputMaybe<ImageFormat>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  fit?: InputMaybe<ImageFit>;
  background?: InputMaybe<Scalars['String']>;
  rotate?: InputMaybe<Scalars['Int']>;
  trim?: InputMaybe<Scalars['Float']>;
};

export type ImageSharpFixed = {
  base64: Maybe<Scalars['String']>;
  tracedSVG: Maybe<Scalars['String']>;
  aspectRatio: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp: Maybe<Scalars['String']>;
  srcSetWebp: Maybe<Scalars['String']>;
  originalName: Maybe<Scalars['String']>;
};

export type ImageSharpFluid = {
  base64: Maybe<Scalars['String']>;
  tracedSVG: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp: Maybe<Scalars['String']>;
  srcSetWebp: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
  originalImg: Maybe<Scalars['String']>;
  originalName: Maybe<Scalars['String']>;
  presentationWidth: Scalars['Int'];
  presentationHeight: Scalars['Int'];
};

export type ImagePlaceholder =
  | 'DOMINANT_COLOR'
  | 'TRACED_SVG'
  | 'BLURRED'
  | 'NONE';

export type BlurredOptions = {
  /** Width of the generated low-res preview. Default is 20px */
  width: InputMaybe<Scalars['Int']>;
  /** Force the output format for the low-res preview. Default is to use the same format as the input. You should rarely need to change this */
  toFormat: InputMaybe<ImageFormat>;
};

export type JpgOptions = {
  quality: InputMaybe<Scalars['Int']>;
  progressive: InputMaybe<Scalars['Boolean']>;
};

export type PngOptions = {
  quality: InputMaybe<Scalars['Int']>;
  compressionSpeed: InputMaybe<Scalars['Int']>;
};

export type WebPOptions = {
  quality: InputMaybe<Scalars['Int']>;
};

export type AvifOptions = {
  quality: InputMaybe<Scalars['Int']>;
  lossless: InputMaybe<Scalars['Boolean']>;
  speed: InputMaybe<Scalars['Int']>;
};

export type TransformOptions = {
  grayscale: InputMaybe<Scalars['Boolean']>;
  duotone: InputMaybe<DuotoneGradient>;
  rotate: InputMaybe<Scalars['Int']>;
  trim: InputMaybe<Scalars['Float']>;
  cropFocus: InputMaybe<ImageCropFocus>;
  fit: InputMaybe<ImageFit>;
};

export type ImageSharpOriginal = {
  width: Maybe<Scalars['Float']>;
  height: Maybe<Scalars['Float']>;
  src: Maybe<Scalars['String']>;
};

export type ImageSharpResize = {
  src: Maybe<Scalars['String']>;
  tracedSVG: Maybe<Scalars['String']>;
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  aspectRatio: Maybe<Scalars['Float']>;
  originalName: Maybe<Scalars['String']>;
};

export type Query = {
  file: Maybe<File>;
  allFile: FileConnection;
  directory: Maybe<Directory>;
  allDirectory: DirectoryConnection;
  site: Maybe<Site>;
  allSite: SiteConnection;
  siteFunction: Maybe<SiteFunction>;
  allSiteFunction: SiteFunctionConnection;
  sitePage: Maybe<SitePage>;
  allSitePage: SitePageConnection;
  sitePlugin: Maybe<SitePlugin>;
  allSitePlugin: SitePluginConnection;
  siteBuildMetadata: Maybe<SiteBuildMetadata>;
  allSiteBuildMetadata: SiteBuildMetadataConnection;
  sanityCategory: Maybe<SanityCategory>;
  allSanityCategory: SanityCategoryConnection;
  sanityGlobalData: Maybe<SanityGlobalData>;
  allSanityGlobalData: SanityGlobalDataConnection;
  sanityProduct: Maybe<SanityProduct>;
  allSanityProduct: SanityProductConnection;
  sanityFileAsset: Maybe<SanityFileAsset>;
  allSanityFileAsset: SanityFileAssetConnection;
  sanityImageAsset: Maybe<SanityImageAsset>;
  allSanityImageAsset: SanityImageAssetConnection;
  imageSharp: Maybe<ImageSharp>;
  allImageSharp: ImageSharpConnection;
};


export type QueryFileArgs = {
  sourceInstanceName: InputMaybe<StringQueryOperatorInput>;
  absolutePath: InputMaybe<StringQueryOperatorInput>;
  relativePath: InputMaybe<StringQueryOperatorInput>;
  extension: InputMaybe<StringQueryOperatorInput>;
  size: InputMaybe<IntQueryOperatorInput>;
  prettySize: InputMaybe<StringQueryOperatorInput>;
  modifiedTime: InputMaybe<DateQueryOperatorInput>;
  accessTime: InputMaybe<DateQueryOperatorInput>;
  changeTime: InputMaybe<DateQueryOperatorInput>;
  birthTime: InputMaybe<DateQueryOperatorInput>;
  root: InputMaybe<StringQueryOperatorInput>;
  dir: InputMaybe<StringQueryOperatorInput>;
  base: InputMaybe<StringQueryOperatorInput>;
  ext: InputMaybe<StringQueryOperatorInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  relativeDirectory: InputMaybe<StringQueryOperatorInput>;
  dev: InputMaybe<IntQueryOperatorInput>;
  mode: InputMaybe<IntQueryOperatorInput>;
  nlink: InputMaybe<IntQueryOperatorInput>;
  uid: InputMaybe<IntQueryOperatorInput>;
  gid: InputMaybe<IntQueryOperatorInput>;
  rdev: InputMaybe<IntQueryOperatorInput>;
  ino: InputMaybe<FloatQueryOperatorInput>;
  atimeMs: InputMaybe<FloatQueryOperatorInput>;
  mtimeMs: InputMaybe<FloatQueryOperatorInput>;
  ctimeMs: InputMaybe<FloatQueryOperatorInput>;
  atime: InputMaybe<DateQueryOperatorInput>;
  mtime: InputMaybe<DateQueryOperatorInput>;
  ctime: InputMaybe<DateQueryOperatorInput>;
  birthtime: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs: InputMaybe<FloatQueryOperatorInput>;
  blksize: InputMaybe<IntQueryOperatorInput>;
  blocks: InputMaybe<IntQueryOperatorInput>;
  publicURL: InputMaybe<StringQueryOperatorInput>;
  childrenImageSharp: InputMaybe<ImageSharpFilterListInput>;
  childImageSharp: InputMaybe<ImageSharpFilterInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  children: InputMaybe<NodeFilterListInput>;
  internal: InputMaybe<InternalFilterInput>;
};


export type QueryAllFileArgs = {
  filter: InputMaybe<FileFilterInput>;
  sort: InputMaybe<FileSortInput>;
  skip: InputMaybe<Scalars['Int']>;
  limit: InputMaybe<Scalars['Int']>;
};


export type QueryDirectoryArgs = {
  sourceInstanceName: InputMaybe<StringQueryOperatorInput>;
  absolutePath: InputMaybe<StringQueryOperatorInput>;
  relativePath: InputMaybe<StringQueryOperatorInput>;
  extension: InputMaybe<StringQueryOperatorInput>;
  size: InputMaybe<IntQueryOperatorInput>;
  prettySize: InputMaybe<StringQueryOperatorInput>;
  modifiedTime: InputMaybe<DateQueryOperatorInput>;
  accessTime: InputMaybe<DateQueryOperatorInput>;
  changeTime: InputMaybe<DateQueryOperatorInput>;
  birthTime: InputMaybe<DateQueryOperatorInput>;
  root: InputMaybe<StringQueryOperatorInput>;
  dir: InputMaybe<StringQueryOperatorInput>;
  base: InputMaybe<StringQueryOperatorInput>;
  ext: InputMaybe<StringQueryOperatorInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  relativeDirectory: InputMaybe<StringQueryOperatorInput>;
  dev: InputMaybe<IntQueryOperatorInput>;
  mode: InputMaybe<IntQueryOperatorInput>;
  nlink: InputMaybe<IntQueryOperatorInput>;
  uid: InputMaybe<IntQueryOperatorInput>;
  gid: InputMaybe<IntQueryOperatorInput>;
  rdev: InputMaybe<IntQueryOperatorInput>;
  ino: InputMaybe<FloatQueryOperatorInput>;
  atimeMs: InputMaybe<FloatQueryOperatorInput>;
  mtimeMs: InputMaybe<FloatQueryOperatorInput>;
  ctimeMs: InputMaybe<FloatQueryOperatorInput>;
  atime: InputMaybe<DateQueryOperatorInput>;
  mtime: InputMaybe<DateQueryOperatorInput>;
  ctime: InputMaybe<DateQueryOperatorInput>;
  birthtime: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs: InputMaybe<FloatQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  children: InputMaybe<NodeFilterListInput>;
  internal: InputMaybe<InternalFilterInput>;
};


export type QueryAllDirectoryArgs = {
  filter: InputMaybe<DirectoryFilterInput>;
  sort: InputMaybe<DirectorySortInput>;
  skip: InputMaybe<Scalars['Int']>;
  limit: InputMaybe<Scalars['Int']>;
};


export type QuerySiteArgs = {
  buildTime: InputMaybe<DateQueryOperatorInput>;
  siteMetadata: InputMaybe<SiteSiteMetadataFilterInput>;
  port: InputMaybe<IntQueryOperatorInput>;
  host: InputMaybe<StringQueryOperatorInput>;
  polyfill: InputMaybe<BooleanQueryOperatorInput>;
  pathPrefix: InputMaybe<StringQueryOperatorInput>;
  jsxRuntime: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  children: InputMaybe<NodeFilterListInput>;
  internal: InputMaybe<InternalFilterInput>;
};


export type QueryAllSiteArgs = {
  filter: InputMaybe<SiteFilterInput>;
  sort: InputMaybe<SiteSortInput>;
  skip: InputMaybe<Scalars['Int']>;
  limit: InputMaybe<Scalars['Int']>;
};


export type QuerySiteFunctionArgs = {
  functionRoute: InputMaybe<StringQueryOperatorInput>;
  pluginName: InputMaybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath: InputMaybe<StringQueryOperatorInput>;
  originalRelativeFilePath: InputMaybe<StringQueryOperatorInput>;
  relativeCompiledFilePath: InputMaybe<StringQueryOperatorInput>;
  absoluteCompiledFilePath: InputMaybe<StringQueryOperatorInput>;
  matchPath: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  children: InputMaybe<NodeFilterListInput>;
  internal: InputMaybe<InternalFilterInput>;
};


export type QueryAllSiteFunctionArgs = {
  filter: InputMaybe<SiteFunctionFilterInput>;
  sort: InputMaybe<SiteFunctionSortInput>;
  skip: InputMaybe<Scalars['Int']>;
  limit: InputMaybe<Scalars['Int']>;
};


export type QuerySitePageArgs = {
  path: InputMaybe<StringQueryOperatorInput>;
  component: InputMaybe<StringQueryOperatorInput>;
  internalComponentName: InputMaybe<StringQueryOperatorInput>;
  componentChunkName: InputMaybe<StringQueryOperatorInput>;
  matchPath: InputMaybe<StringQueryOperatorInput>;
  pageContext: InputMaybe<JsonQueryOperatorInput>;
  pluginCreator: InputMaybe<SitePluginFilterInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  children: InputMaybe<NodeFilterListInput>;
  internal: InputMaybe<InternalFilterInput>;
};


export type QueryAllSitePageArgs = {
  filter: InputMaybe<SitePageFilterInput>;
  sort: InputMaybe<SitePageSortInput>;
  skip: InputMaybe<Scalars['Int']>;
  limit: InputMaybe<Scalars['Int']>;
};


export type QuerySitePluginArgs = {
  resolve: InputMaybe<StringQueryOperatorInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  version: InputMaybe<StringQueryOperatorInput>;
  nodeAPIs: InputMaybe<StringQueryOperatorInput>;
  browserAPIs: InputMaybe<StringQueryOperatorInput>;
  ssrAPIs: InputMaybe<StringQueryOperatorInput>;
  pluginFilepath: InputMaybe<StringQueryOperatorInput>;
  pluginOptions: InputMaybe<JsonQueryOperatorInput>;
  packageJson: InputMaybe<JsonQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  children: InputMaybe<NodeFilterListInput>;
  internal: InputMaybe<InternalFilterInput>;
};


export type QueryAllSitePluginArgs = {
  filter: InputMaybe<SitePluginFilterInput>;
  sort: InputMaybe<SitePluginSortInput>;
  skip: InputMaybe<Scalars['Int']>;
  limit: InputMaybe<Scalars['Int']>;
};


export type QuerySiteBuildMetadataArgs = {
  buildTime: InputMaybe<DateQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  children: InputMaybe<NodeFilterListInput>;
  internal: InputMaybe<InternalFilterInput>;
};


export type QueryAllSiteBuildMetadataArgs = {
  filter: InputMaybe<SiteBuildMetadataFilterInput>;
  sort: InputMaybe<SiteBuildMetadataSortInput>;
  skip: InputMaybe<Scalars['Int']>;
  limit: InputMaybe<Scalars['Int']>;
};


export type QuerySanityCategoryArgs = {
  _id: InputMaybe<StringQueryOperatorInput>;
  _type: InputMaybe<StringQueryOperatorInput>;
  _createdAt: InputMaybe<DateQueryOperatorInput>;
  _updatedAt: InputMaybe<DateQueryOperatorInput>;
  _rev: InputMaybe<StringQueryOperatorInput>;
  _key: InputMaybe<StringQueryOperatorInput>;
  orderRank: InputMaybe<StringQueryOperatorInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  slug: InputMaybe<SanitySlugFilterInput>;
  image: InputMaybe<SanityMainImageFilterInput>;
  _rawSlug: InputMaybe<JsonQueryOperatorInput>;
  _rawImage: InputMaybe<JsonQueryOperatorInput>;
  gatsbyPath: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  children: InputMaybe<NodeFilterListInput>;
  internal: InputMaybe<InternalFilterInput>;
};


export type QueryAllSanityCategoryArgs = {
  filter: InputMaybe<SanityCategoryFilterInput>;
  sort: InputMaybe<SanityCategorySortInput>;
  skip: InputMaybe<Scalars['Int']>;
  limit: InputMaybe<Scalars['Int']>;
};


export type QuerySanityGlobalDataArgs = {
  _id: InputMaybe<StringQueryOperatorInput>;
  _type: InputMaybe<StringQueryOperatorInput>;
  _createdAt: InputMaybe<DateQueryOperatorInput>;
  _updatedAt: InputMaybe<DateQueryOperatorInput>;
  _rev: InputMaybe<StringQueryOperatorInput>;
  _key: InputMaybe<StringQueryOperatorInput>;
  logo: InputMaybe<SanityImageFilterInput>;
  aboutSection: InputMaybe<SanityAboutSectionFilterInput>;
  footerCopy: InputMaybe<StringQueryOperatorInput>;
  _rawLogo: InputMaybe<JsonQueryOperatorInput>;
  _rawAboutSection: InputMaybe<JsonQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  children: InputMaybe<NodeFilterListInput>;
  internal: InputMaybe<InternalFilterInput>;
};


export type QueryAllSanityGlobalDataArgs = {
  filter: InputMaybe<SanityGlobalDataFilterInput>;
  sort: InputMaybe<SanityGlobalDataSortInput>;
  skip: InputMaybe<Scalars['Int']>;
  limit: InputMaybe<Scalars['Int']>;
};


export type QuerySanityProductArgs = {
  _id: InputMaybe<StringQueryOperatorInput>;
  _type: InputMaybe<StringQueryOperatorInput>;
  _createdAt: InputMaybe<DateQueryOperatorInput>;
  _updatedAt: InputMaybe<DateQueryOperatorInput>;
  _rev: InputMaybe<StringQueryOperatorInput>;
  _key: InputMaybe<StringQueryOperatorInput>;
  orderRank: InputMaybe<StringQueryOperatorInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  shortName: InputMaybe<StringQueryOperatorInput>;
  slug: InputMaybe<SanitySlugFilterInput>;
  image: InputMaybe<SanityMainImageFilterInput>;
  heroImages: InputMaybe<SanityResponsiveImagesFilterInput>;
  productImages: InputMaybe<SanityResponsiveImagesFilterInput>;
  previewImages: InputMaybe<SanityResponsiveImagesFilterInput>;
  featured: InputMaybe<BooleanQueryOperatorInput>;
  featuredImages: InputMaybe<SanityResponsiveImagesFilterInput>;
  category: InputMaybe<SanityCategoryFilterInput>;
  new: InputMaybe<BooleanQueryOperatorInput>;
  price: InputMaybe<FloatQueryOperatorInput>;
  description: InputMaybe<StringQueryOperatorInput>;
  includes: InputMaybe<SanityBoxContentFilterListInput>;
  gallery: InputMaybe<SanityResponsiveImagesFilterListInput>;
  related: InputMaybe<SanityProductFilterListInput>;
  features: InputMaybe<SanityBlockFilterListInput>;
  _rawSlug: InputMaybe<JsonQueryOperatorInput>;
  _rawImage: InputMaybe<JsonQueryOperatorInput>;
  _rawHeroImages: InputMaybe<JsonQueryOperatorInput>;
  _rawProductImages: InputMaybe<JsonQueryOperatorInput>;
  _rawPreviewImages: InputMaybe<JsonQueryOperatorInput>;
  _rawFeaturedImages: InputMaybe<JsonQueryOperatorInput>;
  _rawCategory: InputMaybe<JsonQueryOperatorInput>;
  _rawFeatures: InputMaybe<JsonQueryOperatorInput>;
  _rawIncludes: InputMaybe<JsonQueryOperatorInput>;
  _rawGallery: InputMaybe<JsonQueryOperatorInput>;
  _rawRelated: InputMaybe<JsonQueryOperatorInput>;
  gatsbyPath: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  children: InputMaybe<NodeFilterListInput>;
  internal: InputMaybe<InternalFilterInput>;
};


export type QueryAllSanityProductArgs = {
  filter: InputMaybe<SanityProductFilterInput>;
  sort: InputMaybe<SanityProductSortInput>;
  skip: InputMaybe<Scalars['Int']>;
  limit: InputMaybe<Scalars['Int']>;
};


export type QuerySanityFileAssetArgs = {
  _id: InputMaybe<StringQueryOperatorInput>;
  _type: InputMaybe<StringQueryOperatorInput>;
  _createdAt: InputMaybe<DateQueryOperatorInput>;
  _updatedAt: InputMaybe<DateQueryOperatorInput>;
  _rev: InputMaybe<StringQueryOperatorInput>;
  _key: InputMaybe<StringQueryOperatorInput>;
  originalFilename: InputMaybe<StringQueryOperatorInput>;
  label: InputMaybe<StringQueryOperatorInput>;
  title: InputMaybe<StringQueryOperatorInput>;
  description: InputMaybe<StringQueryOperatorInput>;
  altText: InputMaybe<StringQueryOperatorInput>;
  sha1hash: InputMaybe<StringQueryOperatorInput>;
  extension: InputMaybe<StringQueryOperatorInput>;
  mimeType: InputMaybe<StringQueryOperatorInput>;
  size: InputMaybe<FloatQueryOperatorInput>;
  assetId: InputMaybe<StringQueryOperatorInput>;
  path: InputMaybe<StringQueryOperatorInput>;
  url: InputMaybe<StringQueryOperatorInput>;
  source: InputMaybe<SanityAssetSourceDataFilterInput>;
  _rawSource: InputMaybe<JsonQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  children: InputMaybe<NodeFilterListInput>;
  internal: InputMaybe<InternalFilterInput>;
};


export type QueryAllSanityFileAssetArgs = {
  filter: InputMaybe<SanityFileAssetFilterInput>;
  sort: InputMaybe<SanityFileAssetSortInput>;
  skip: InputMaybe<Scalars['Int']>;
  limit: InputMaybe<Scalars['Int']>;
};


export type QuerySanityImageAssetArgs = {
  _id: InputMaybe<StringQueryOperatorInput>;
  _type: InputMaybe<StringQueryOperatorInput>;
  _createdAt: InputMaybe<DateQueryOperatorInput>;
  _updatedAt: InputMaybe<DateQueryOperatorInput>;
  _rev: InputMaybe<StringQueryOperatorInput>;
  _key: InputMaybe<StringQueryOperatorInput>;
  originalFilename: InputMaybe<StringQueryOperatorInput>;
  label: InputMaybe<StringQueryOperatorInput>;
  title: InputMaybe<StringQueryOperatorInput>;
  description: InputMaybe<StringQueryOperatorInput>;
  altText: InputMaybe<StringQueryOperatorInput>;
  sha1hash: InputMaybe<StringQueryOperatorInput>;
  extension: InputMaybe<StringQueryOperatorInput>;
  mimeType: InputMaybe<StringQueryOperatorInput>;
  size: InputMaybe<FloatQueryOperatorInput>;
  assetId: InputMaybe<StringQueryOperatorInput>;
  uploadId: InputMaybe<StringQueryOperatorInput>;
  path: InputMaybe<StringQueryOperatorInput>;
  url: InputMaybe<StringQueryOperatorInput>;
  metadata: InputMaybe<SanityImageMetadataFilterInput>;
  source: InputMaybe<SanityAssetSourceDataFilterInput>;
  _rawMetadata: InputMaybe<JsonQueryOperatorInput>;
  _rawSource: InputMaybe<JsonQueryOperatorInput>;
  gatsbyImageData: InputMaybe<JsonQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  children: InputMaybe<NodeFilterListInput>;
  internal: InputMaybe<InternalFilterInput>;
};


export type QueryAllSanityImageAssetArgs = {
  filter: InputMaybe<SanityImageAssetFilterInput>;
  sort: InputMaybe<SanityImageAssetSortInput>;
  skip: InputMaybe<Scalars['Int']>;
  limit: InputMaybe<Scalars['Int']>;
};


export type QueryImageSharpArgs = {
  fixed: InputMaybe<ImageSharpFixedFilterInput>;
  fluid: InputMaybe<ImageSharpFluidFilterInput>;
  gatsbyImageData: InputMaybe<JsonQueryOperatorInput>;
  original: InputMaybe<ImageSharpOriginalFilterInput>;
  resize: InputMaybe<ImageSharpResizeFilterInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  children: InputMaybe<NodeFilterListInput>;
  internal: InputMaybe<InternalFilterInput>;
};


export type QueryAllImageSharpArgs = {
  filter: InputMaybe<ImageSharpFilterInput>;
  sort: InputMaybe<ImageSharpSortInput>;
  skip: InputMaybe<Scalars['Int']>;
  limit: InputMaybe<Scalars['Int']>;
};

export type StringQueryOperatorInput = {
  eq: InputMaybe<Scalars['String']>;
  ne: InputMaybe<Scalars['String']>;
  in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  nin: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex: InputMaybe<Scalars['String']>;
  glob: InputMaybe<Scalars['String']>;
};

export type IntQueryOperatorInput = {
  eq: InputMaybe<Scalars['Int']>;
  ne: InputMaybe<Scalars['Int']>;
  gt: InputMaybe<Scalars['Int']>;
  gte: InputMaybe<Scalars['Int']>;
  lt: InputMaybe<Scalars['Int']>;
  lte: InputMaybe<Scalars['Int']>;
  in: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  nin: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type DateQueryOperatorInput = {
  eq: InputMaybe<Scalars['Date']>;
  ne: InputMaybe<Scalars['Date']>;
  gt: InputMaybe<Scalars['Date']>;
  gte: InputMaybe<Scalars['Date']>;
  lt: InputMaybe<Scalars['Date']>;
  lte: InputMaybe<Scalars['Date']>;
  in: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  nin: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
};

export type FloatQueryOperatorInput = {
  eq: InputMaybe<Scalars['Float']>;
  ne: InputMaybe<Scalars['Float']>;
  gt: InputMaybe<Scalars['Float']>;
  gte: InputMaybe<Scalars['Float']>;
  lt: InputMaybe<Scalars['Float']>;
  lte: InputMaybe<Scalars['Float']>;
  in: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  nin: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type ImageSharpFilterListInput = {
  elemMatch: InputMaybe<ImageSharpFilterInput>;
};

export type ImageSharpFilterInput = {
  fixed: InputMaybe<ImageSharpFixedFilterInput>;
  fluid: InputMaybe<ImageSharpFluidFilterInput>;
  gatsbyImageData: InputMaybe<JsonQueryOperatorInput>;
  original: InputMaybe<ImageSharpOriginalFilterInput>;
  resize: InputMaybe<ImageSharpResizeFilterInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  children: InputMaybe<NodeFilterListInput>;
  internal: InputMaybe<InternalFilterInput>;
};

export type ImageSharpFixedFilterInput = {
  base64: InputMaybe<StringQueryOperatorInput>;
  tracedSVG: InputMaybe<StringQueryOperatorInput>;
  aspectRatio: InputMaybe<FloatQueryOperatorInput>;
  width: InputMaybe<FloatQueryOperatorInput>;
  height: InputMaybe<FloatQueryOperatorInput>;
  src: InputMaybe<StringQueryOperatorInput>;
  srcSet: InputMaybe<StringQueryOperatorInput>;
  srcWebp: InputMaybe<StringQueryOperatorInput>;
  srcSetWebp: InputMaybe<StringQueryOperatorInput>;
  originalName: InputMaybe<StringQueryOperatorInput>;
};

export type ImageSharpFluidFilterInput = {
  base64: InputMaybe<StringQueryOperatorInput>;
  tracedSVG: InputMaybe<StringQueryOperatorInput>;
  aspectRatio: InputMaybe<FloatQueryOperatorInput>;
  src: InputMaybe<StringQueryOperatorInput>;
  srcSet: InputMaybe<StringQueryOperatorInput>;
  srcWebp: InputMaybe<StringQueryOperatorInput>;
  srcSetWebp: InputMaybe<StringQueryOperatorInput>;
  sizes: InputMaybe<StringQueryOperatorInput>;
  originalImg: InputMaybe<StringQueryOperatorInput>;
  originalName: InputMaybe<StringQueryOperatorInput>;
  presentationWidth: InputMaybe<IntQueryOperatorInput>;
  presentationHeight: InputMaybe<IntQueryOperatorInput>;
};

export type JsonQueryOperatorInput = {
  eq: InputMaybe<Scalars['JSON']>;
  ne: InputMaybe<Scalars['JSON']>;
  in: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  nin: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  regex: InputMaybe<Scalars['JSON']>;
  glob: InputMaybe<Scalars['JSON']>;
};

export type ImageSharpOriginalFilterInput = {
  width: InputMaybe<FloatQueryOperatorInput>;
  height: InputMaybe<FloatQueryOperatorInput>;
  src: InputMaybe<StringQueryOperatorInput>;
};

export type ImageSharpResizeFilterInput = {
  src: InputMaybe<StringQueryOperatorInput>;
  tracedSVG: InputMaybe<StringQueryOperatorInput>;
  width: InputMaybe<IntQueryOperatorInput>;
  height: InputMaybe<IntQueryOperatorInput>;
  aspectRatio: InputMaybe<FloatQueryOperatorInput>;
  originalName: InputMaybe<StringQueryOperatorInput>;
};

export type NodeFilterInput = {
  id: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  children: InputMaybe<NodeFilterListInput>;
  internal: InputMaybe<InternalFilterInput>;
};

export type NodeFilterListInput = {
  elemMatch: InputMaybe<NodeFilterInput>;
};

export type InternalFilterInput = {
  content: InputMaybe<StringQueryOperatorInput>;
  contentDigest: InputMaybe<StringQueryOperatorInput>;
  description: InputMaybe<StringQueryOperatorInput>;
  fieldOwners: InputMaybe<StringQueryOperatorInput>;
  ignoreType: InputMaybe<BooleanQueryOperatorInput>;
  mediaType: InputMaybe<StringQueryOperatorInput>;
  owner: InputMaybe<StringQueryOperatorInput>;
  type: InputMaybe<StringQueryOperatorInput>;
};

export type BooleanQueryOperatorInput = {
  eq: InputMaybe<Scalars['Boolean']>;
  ne: InputMaybe<Scalars['Boolean']>;
  in: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  nin: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
};

export type FileConnection = {
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  sum: Maybe<Scalars['Float']>;
  group: Array<FileGroupConnection>;
};


export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionMaxArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionMinArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionSumArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionGroupArgs = {
  skip: InputMaybe<Scalars['Int']>;
  limit: InputMaybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

export type FileEdge = {
  next: Maybe<File>;
  node: File;
  previous: Maybe<File>;
};

export type PageInfo = {
  currentPage: Scalars['Int'];
  hasPreviousPage: Scalars['Boolean'];
  hasNextPage: Scalars['Boolean'];
  itemCount: Scalars['Int'];
  pageCount: Scalars['Int'];
  perPage: Maybe<Scalars['Int']>;
  totalCount: Scalars['Int'];
};

export type FileFieldsEnum =
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'blksize'
  | 'blocks'
  | 'publicURL'
  | 'childrenImageSharp'
  | 'childrenImageSharp___fixed___base64'
  | 'childrenImageSharp___fixed___tracedSVG'
  | 'childrenImageSharp___fixed___aspectRatio'
  | 'childrenImageSharp___fixed___width'
  | 'childrenImageSharp___fixed___height'
  | 'childrenImageSharp___fixed___src'
  | 'childrenImageSharp___fixed___srcSet'
  | 'childrenImageSharp___fixed___srcWebp'
  | 'childrenImageSharp___fixed___srcSetWebp'
  | 'childrenImageSharp___fixed___originalName'
  | 'childrenImageSharp___fluid___base64'
  | 'childrenImageSharp___fluid___tracedSVG'
  | 'childrenImageSharp___fluid___aspectRatio'
  | 'childrenImageSharp___fluid___src'
  | 'childrenImageSharp___fluid___srcSet'
  | 'childrenImageSharp___fluid___srcWebp'
  | 'childrenImageSharp___fluid___srcSetWebp'
  | 'childrenImageSharp___fluid___sizes'
  | 'childrenImageSharp___fluid___originalImg'
  | 'childrenImageSharp___fluid___originalName'
  | 'childrenImageSharp___fluid___presentationWidth'
  | 'childrenImageSharp___fluid___presentationHeight'
  | 'childrenImageSharp___gatsbyImageData'
  | 'childrenImageSharp___original___width'
  | 'childrenImageSharp___original___height'
  | 'childrenImageSharp___original___src'
  | 'childrenImageSharp___resize___src'
  | 'childrenImageSharp___resize___tracedSVG'
  | 'childrenImageSharp___resize___width'
  | 'childrenImageSharp___resize___height'
  | 'childrenImageSharp___resize___aspectRatio'
  | 'childrenImageSharp___resize___originalName'
  | 'childrenImageSharp___id'
  | 'childrenImageSharp___parent___id'
  | 'childrenImageSharp___parent___parent___id'
  | 'childrenImageSharp___parent___parent___children'
  | 'childrenImageSharp___parent___children'
  | 'childrenImageSharp___parent___children___id'
  | 'childrenImageSharp___parent___children___children'
  | 'childrenImageSharp___parent___internal___content'
  | 'childrenImageSharp___parent___internal___contentDigest'
  | 'childrenImageSharp___parent___internal___description'
  | 'childrenImageSharp___parent___internal___fieldOwners'
  | 'childrenImageSharp___parent___internal___ignoreType'
  | 'childrenImageSharp___parent___internal___mediaType'
  | 'childrenImageSharp___parent___internal___owner'
  | 'childrenImageSharp___parent___internal___type'
  | 'childrenImageSharp___children'
  | 'childrenImageSharp___children___id'
  | 'childrenImageSharp___children___parent___id'
  | 'childrenImageSharp___children___parent___children'
  | 'childrenImageSharp___children___children'
  | 'childrenImageSharp___children___children___id'
  | 'childrenImageSharp___children___children___children'
  | 'childrenImageSharp___children___internal___content'
  | 'childrenImageSharp___children___internal___contentDigest'
  | 'childrenImageSharp___children___internal___description'
  | 'childrenImageSharp___children___internal___fieldOwners'
  | 'childrenImageSharp___children___internal___ignoreType'
  | 'childrenImageSharp___children___internal___mediaType'
  | 'childrenImageSharp___children___internal___owner'
  | 'childrenImageSharp___children___internal___type'
  | 'childrenImageSharp___internal___content'
  | 'childrenImageSharp___internal___contentDigest'
  | 'childrenImageSharp___internal___description'
  | 'childrenImageSharp___internal___fieldOwners'
  | 'childrenImageSharp___internal___ignoreType'
  | 'childrenImageSharp___internal___mediaType'
  | 'childrenImageSharp___internal___owner'
  | 'childrenImageSharp___internal___type'
  | 'childImageSharp___fixed___base64'
  | 'childImageSharp___fixed___tracedSVG'
  | 'childImageSharp___fixed___aspectRatio'
  | 'childImageSharp___fixed___width'
  | 'childImageSharp___fixed___height'
  | 'childImageSharp___fixed___src'
  | 'childImageSharp___fixed___srcSet'
  | 'childImageSharp___fixed___srcWebp'
  | 'childImageSharp___fixed___srcSetWebp'
  | 'childImageSharp___fixed___originalName'
  | 'childImageSharp___fluid___base64'
  | 'childImageSharp___fluid___tracedSVG'
  | 'childImageSharp___fluid___aspectRatio'
  | 'childImageSharp___fluid___src'
  | 'childImageSharp___fluid___srcSet'
  | 'childImageSharp___fluid___srcWebp'
  | 'childImageSharp___fluid___srcSetWebp'
  | 'childImageSharp___fluid___sizes'
  | 'childImageSharp___fluid___originalImg'
  | 'childImageSharp___fluid___originalName'
  | 'childImageSharp___fluid___presentationWidth'
  | 'childImageSharp___fluid___presentationHeight'
  | 'childImageSharp___gatsbyImageData'
  | 'childImageSharp___original___width'
  | 'childImageSharp___original___height'
  | 'childImageSharp___original___src'
  | 'childImageSharp___resize___src'
  | 'childImageSharp___resize___tracedSVG'
  | 'childImageSharp___resize___width'
  | 'childImageSharp___resize___height'
  | 'childImageSharp___resize___aspectRatio'
  | 'childImageSharp___resize___originalName'
  | 'childImageSharp___id'
  | 'childImageSharp___parent___id'
  | 'childImageSharp___parent___parent___id'
  | 'childImageSharp___parent___parent___children'
  | 'childImageSharp___parent___children'
  | 'childImageSharp___parent___children___id'
  | 'childImageSharp___parent___children___children'
  | 'childImageSharp___parent___internal___content'
  | 'childImageSharp___parent___internal___contentDigest'
  | 'childImageSharp___parent___internal___description'
  | 'childImageSharp___parent___internal___fieldOwners'
  | 'childImageSharp___parent___internal___ignoreType'
  | 'childImageSharp___parent___internal___mediaType'
  | 'childImageSharp___parent___internal___owner'
  | 'childImageSharp___parent___internal___type'
  | 'childImageSharp___children'
  | 'childImageSharp___children___id'
  | 'childImageSharp___children___parent___id'
  | 'childImageSharp___children___parent___children'
  | 'childImageSharp___children___children'
  | 'childImageSharp___children___children___id'
  | 'childImageSharp___children___children___children'
  | 'childImageSharp___children___internal___content'
  | 'childImageSharp___children___internal___contentDigest'
  | 'childImageSharp___children___internal___description'
  | 'childImageSharp___children___internal___fieldOwners'
  | 'childImageSharp___children___internal___ignoreType'
  | 'childImageSharp___children___internal___mediaType'
  | 'childImageSharp___children___internal___owner'
  | 'childImageSharp___children___internal___type'
  | 'childImageSharp___internal___content'
  | 'childImageSharp___internal___contentDigest'
  | 'childImageSharp___internal___description'
  | 'childImageSharp___internal___fieldOwners'
  | 'childImageSharp___internal___ignoreType'
  | 'childImageSharp___internal___mediaType'
  | 'childImageSharp___internal___owner'
  | 'childImageSharp___internal___type'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type FileGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  sum: Maybe<Scalars['Float']>;
  group: Array<FileGroupConnection>;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
};


export type FileGroupConnectionDistinctArgs = {
  field: FileFieldsEnum;
};


export type FileGroupConnectionMaxArgs = {
  field: FileFieldsEnum;
};


export type FileGroupConnectionMinArgs = {
  field: FileFieldsEnum;
};


export type FileGroupConnectionSumArgs = {
  field: FileFieldsEnum;
};


export type FileGroupConnectionGroupArgs = {
  skip: InputMaybe<Scalars['Int']>;
  limit: InputMaybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

export type FileFilterInput = {
  sourceInstanceName: InputMaybe<StringQueryOperatorInput>;
  absolutePath: InputMaybe<StringQueryOperatorInput>;
  relativePath: InputMaybe<StringQueryOperatorInput>;
  extension: InputMaybe<StringQueryOperatorInput>;
  size: InputMaybe<IntQueryOperatorInput>;
  prettySize: InputMaybe<StringQueryOperatorInput>;
  modifiedTime: InputMaybe<DateQueryOperatorInput>;
  accessTime: InputMaybe<DateQueryOperatorInput>;
  changeTime: InputMaybe<DateQueryOperatorInput>;
  birthTime: InputMaybe<DateQueryOperatorInput>;
  root: InputMaybe<StringQueryOperatorInput>;
  dir: InputMaybe<StringQueryOperatorInput>;
  base: InputMaybe<StringQueryOperatorInput>;
  ext: InputMaybe<StringQueryOperatorInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  relativeDirectory: InputMaybe<StringQueryOperatorInput>;
  dev: InputMaybe<IntQueryOperatorInput>;
  mode: InputMaybe<IntQueryOperatorInput>;
  nlink: InputMaybe<IntQueryOperatorInput>;
  uid: InputMaybe<IntQueryOperatorInput>;
  gid: InputMaybe<IntQueryOperatorInput>;
  rdev: InputMaybe<IntQueryOperatorInput>;
  ino: InputMaybe<FloatQueryOperatorInput>;
  atimeMs: InputMaybe<FloatQueryOperatorInput>;
  mtimeMs: InputMaybe<FloatQueryOperatorInput>;
  ctimeMs: InputMaybe<FloatQueryOperatorInput>;
  atime: InputMaybe<DateQueryOperatorInput>;
  mtime: InputMaybe<DateQueryOperatorInput>;
  ctime: InputMaybe<DateQueryOperatorInput>;
  birthtime: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs: InputMaybe<FloatQueryOperatorInput>;
  blksize: InputMaybe<IntQueryOperatorInput>;
  blocks: InputMaybe<IntQueryOperatorInput>;
  publicURL: InputMaybe<StringQueryOperatorInput>;
  childrenImageSharp: InputMaybe<ImageSharpFilterListInput>;
  childImageSharp: InputMaybe<ImageSharpFilterInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  children: InputMaybe<NodeFilterListInput>;
  internal: InputMaybe<InternalFilterInput>;
};

export type FileSortInput = {
  fields: InputMaybe<Array<InputMaybe<FileFieldsEnum>>>;
  order: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SortOrderEnum =
  | 'ASC'
  | 'DESC';

export type DirectoryConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  sum: Maybe<Scalars['Float']>;
  group: Array<DirectoryGroupConnection>;
};


export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionMaxArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionMinArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionSumArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionGroupArgs = {
  skip: InputMaybe<Scalars['Int']>;
  limit: InputMaybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

export type DirectoryEdge = {
  next: Maybe<Directory>;
  node: Directory;
  previous: Maybe<Directory>;
};

export type DirectoryFieldsEnum =
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type DirectoryGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  sum: Maybe<Scalars['Float']>;
  group: Array<DirectoryGroupConnection>;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
};


export type DirectoryGroupConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryGroupConnectionMaxArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryGroupConnectionMinArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryGroupConnectionSumArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryGroupConnectionGroupArgs = {
  skip: InputMaybe<Scalars['Int']>;
  limit: InputMaybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

export type DirectoryFilterInput = {
  sourceInstanceName: InputMaybe<StringQueryOperatorInput>;
  absolutePath: InputMaybe<StringQueryOperatorInput>;
  relativePath: InputMaybe<StringQueryOperatorInput>;
  extension: InputMaybe<StringQueryOperatorInput>;
  size: InputMaybe<IntQueryOperatorInput>;
  prettySize: InputMaybe<StringQueryOperatorInput>;
  modifiedTime: InputMaybe<DateQueryOperatorInput>;
  accessTime: InputMaybe<DateQueryOperatorInput>;
  changeTime: InputMaybe<DateQueryOperatorInput>;
  birthTime: InputMaybe<DateQueryOperatorInput>;
  root: InputMaybe<StringQueryOperatorInput>;
  dir: InputMaybe<StringQueryOperatorInput>;
  base: InputMaybe<StringQueryOperatorInput>;
  ext: InputMaybe<StringQueryOperatorInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  relativeDirectory: InputMaybe<StringQueryOperatorInput>;
  dev: InputMaybe<IntQueryOperatorInput>;
  mode: InputMaybe<IntQueryOperatorInput>;
  nlink: InputMaybe<IntQueryOperatorInput>;
  uid: InputMaybe<IntQueryOperatorInput>;
  gid: InputMaybe<IntQueryOperatorInput>;
  rdev: InputMaybe<IntQueryOperatorInput>;
  ino: InputMaybe<FloatQueryOperatorInput>;
  atimeMs: InputMaybe<FloatQueryOperatorInput>;
  mtimeMs: InputMaybe<FloatQueryOperatorInput>;
  ctimeMs: InputMaybe<FloatQueryOperatorInput>;
  atime: InputMaybe<DateQueryOperatorInput>;
  mtime: InputMaybe<DateQueryOperatorInput>;
  ctime: InputMaybe<DateQueryOperatorInput>;
  birthtime: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs: InputMaybe<FloatQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  children: InputMaybe<NodeFilterListInput>;
  internal: InputMaybe<InternalFilterInput>;
};

export type DirectorySortInput = {
  fields: InputMaybe<Array<InputMaybe<DirectoryFieldsEnum>>>;
  order: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SiteSiteMetadataFilterInput = {
  title: InputMaybe<StringQueryOperatorInput>;
  description: InputMaybe<StringQueryOperatorInput>;
  siteUrl: InputMaybe<StringQueryOperatorInput>;
};

export type SiteConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  sum: Maybe<Scalars['Float']>;
  group: Array<SiteGroupConnection>;
};


export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionMaxArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionMinArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionSumArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionGroupArgs = {
  skip: InputMaybe<Scalars['Int']>;
  limit: InputMaybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

export type SiteEdge = {
  next: Maybe<Site>;
  node: Site;
  previous: Maybe<Site>;
};

export type SiteFieldsEnum =
  | 'buildTime'
  | 'siteMetadata___title'
  | 'siteMetadata___description'
  | 'siteMetadata___siteUrl'
  | 'port'
  | 'host'
  | 'polyfill'
  | 'pathPrefix'
  | 'jsxRuntime'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SiteGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  sum: Maybe<Scalars['Float']>;
  group: Array<SiteGroupConnection>;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
};


export type SiteGroupConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};


export type SiteGroupConnectionMaxArgs = {
  field: SiteFieldsEnum;
};


export type SiteGroupConnectionMinArgs = {
  field: SiteFieldsEnum;
};


export type SiteGroupConnectionSumArgs = {
  field: SiteFieldsEnum;
};


export type SiteGroupConnectionGroupArgs = {
  skip: InputMaybe<Scalars['Int']>;
  limit: InputMaybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

export type SiteFilterInput = {
  buildTime: InputMaybe<DateQueryOperatorInput>;
  siteMetadata: InputMaybe<SiteSiteMetadataFilterInput>;
  port: InputMaybe<IntQueryOperatorInput>;
  host: InputMaybe<StringQueryOperatorInput>;
  polyfill: InputMaybe<BooleanQueryOperatorInput>;
  pathPrefix: InputMaybe<StringQueryOperatorInput>;
  jsxRuntime: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  children: InputMaybe<NodeFilterListInput>;
  internal: InputMaybe<InternalFilterInput>;
};

export type SiteSortInput = {
  fields: InputMaybe<Array<InputMaybe<SiteFieldsEnum>>>;
  order: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SiteFunctionConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteFunctionEdge>;
  nodes: Array<SiteFunction>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  sum: Maybe<Scalars['Float']>;
  group: Array<SiteFunctionGroupConnection>;
};


export type SiteFunctionConnectionDistinctArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionMaxArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionMinArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionSumArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionGroupArgs = {
  skip: InputMaybe<Scalars['Int']>;
  limit: InputMaybe<Scalars['Int']>;
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionEdge = {
  next: Maybe<SiteFunction>;
  node: SiteFunction;
  previous: Maybe<SiteFunction>;
};

export type SiteFunctionFieldsEnum =
  | 'functionRoute'
  | 'pluginName'
  | 'originalAbsoluteFilePath'
  | 'originalRelativeFilePath'
  | 'relativeCompiledFilePath'
  | 'absoluteCompiledFilePath'
  | 'matchPath'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SiteFunctionGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteFunctionEdge>;
  nodes: Array<SiteFunction>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  sum: Maybe<Scalars['Float']>;
  group: Array<SiteFunctionGroupConnection>;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
};


export type SiteFunctionGroupConnectionDistinctArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionGroupConnectionMaxArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionGroupConnectionMinArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionGroupConnectionSumArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionGroupConnectionGroupArgs = {
  skip: InputMaybe<Scalars['Int']>;
  limit: InputMaybe<Scalars['Int']>;
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionFilterInput = {
  functionRoute: InputMaybe<StringQueryOperatorInput>;
  pluginName: InputMaybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath: InputMaybe<StringQueryOperatorInput>;
  originalRelativeFilePath: InputMaybe<StringQueryOperatorInput>;
  relativeCompiledFilePath: InputMaybe<StringQueryOperatorInput>;
  absoluteCompiledFilePath: InputMaybe<StringQueryOperatorInput>;
  matchPath: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  children: InputMaybe<NodeFilterListInput>;
  internal: InputMaybe<InternalFilterInput>;
};

export type SiteFunctionSortInput = {
  fields: InputMaybe<Array<InputMaybe<SiteFunctionFieldsEnum>>>;
  order: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SitePluginFilterInput = {
  resolve: InputMaybe<StringQueryOperatorInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  version: InputMaybe<StringQueryOperatorInput>;
  nodeAPIs: InputMaybe<StringQueryOperatorInput>;
  browserAPIs: InputMaybe<StringQueryOperatorInput>;
  ssrAPIs: InputMaybe<StringQueryOperatorInput>;
  pluginFilepath: InputMaybe<StringQueryOperatorInput>;
  pluginOptions: InputMaybe<JsonQueryOperatorInput>;
  packageJson: InputMaybe<JsonQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  children: InputMaybe<NodeFilterListInput>;
  internal: InputMaybe<InternalFilterInput>;
};

export type SitePageConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  sum: Maybe<Scalars['Float']>;
  group: Array<SitePageGroupConnection>;
};


export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionMaxArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionMinArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionSumArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionGroupArgs = {
  skip: InputMaybe<Scalars['Int']>;
  limit: InputMaybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

export type SitePageEdge = {
  next: Maybe<SitePage>;
  node: SitePage;
  previous: Maybe<SitePage>;
};

export type SitePageFieldsEnum =
  | 'path'
  | 'component'
  | 'internalComponentName'
  | 'componentChunkName'
  | 'matchPath'
  | 'pageContext'
  | 'pluginCreator___resolve'
  | 'pluginCreator___name'
  | 'pluginCreator___version'
  | 'pluginCreator___nodeAPIs'
  | 'pluginCreator___browserAPIs'
  | 'pluginCreator___ssrAPIs'
  | 'pluginCreator___pluginFilepath'
  | 'pluginCreator___pluginOptions'
  | 'pluginCreator___packageJson'
  | 'pluginCreator___id'
  | 'pluginCreator___parent___id'
  | 'pluginCreator___parent___parent___id'
  | 'pluginCreator___parent___parent___children'
  | 'pluginCreator___parent___children'
  | 'pluginCreator___parent___children___id'
  | 'pluginCreator___parent___children___children'
  | 'pluginCreator___parent___internal___content'
  | 'pluginCreator___parent___internal___contentDigest'
  | 'pluginCreator___parent___internal___description'
  | 'pluginCreator___parent___internal___fieldOwners'
  | 'pluginCreator___parent___internal___ignoreType'
  | 'pluginCreator___parent___internal___mediaType'
  | 'pluginCreator___parent___internal___owner'
  | 'pluginCreator___parent___internal___type'
  | 'pluginCreator___children'
  | 'pluginCreator___children___id'
  | 'pluginCreator___children___parent___id'
  | 'pluginCreator___children___parent___children'
  | 'pluginCreator___children___children'
  | 'pluginCreator___children___children___id'
  | 'pluginCreator___children___children___children'
  | 'pluginCreator___children___internal___content'
  | 'pluginCreator___children___internal___contentDigest'
  | 'pluginCreator___children___internal___description'
  | 'pluginCreator___children___internal___fieldOwners'
  | 'pluginCreator___children___internal___ignoreType'
  | 'pluginCreator___children___internal___mediaType'
  | 'pluginCreator___children___internal___owner'
  | 'pluginCreator___children___internal___type'
  | 'pluginCreator___internal___content'
  | 'pluginCreator___internal___contentDigest'
  | 'pluginCreator___internal___description'
  | 'pluginCreator___internal___fieldOwners'
  | 'pluginCreator___internal___ignoreType'
  | 'pluginCreator___internal___mediaType'
  | 'pluginCreator___internal___owner'
  | 'pluginCreator___internal___type'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SitePageGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  sum: Maybe<Scalars['Float']>;
  group: Array<SitePageGroupConnection>;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
};


export type SitePageGroupConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageGroupConnectionMaxArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageGroupConnectionMinArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageGroupConnectionSumArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageGroupConnectionGroupArgs = {
  skip: InputMaybe<Scalars['Int']>;
  limit: InputMaybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

export type SitePageFilterInput = {
  path: InputMaybe<StringQueryOperatorInput>;
  component: InputMaybe<StringQueryOperatorInput>;
  internalComponentName: InputMaybe<StringQueryOperatorInput>;
  componentChunkName: InputMaybe<StringQueryOperatorInput>;
  matchPath: InputMaybe<StringQueryOperatorInput>;
  pageContext: InputMaybe<JsonQueryOperatorInput>;
  pluginCreator: InputMaybe<SitePluginFilterInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  children: InputMaybe<NodeFilterListInput>;
  internal: InputMaybe<InternalFilterInput>;
};

export type SitePageSortInput = {
  fields: InputMaybe<Array<InputMaybe<SitePageFieldsEnum>>>;
  order: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SitePluginConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  sum: Maybe<Scalars['Float']>;
  group: Array<SitePluginGroupConnection>;
};


export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionMaxArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionMinArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionSumArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionGroupArgs = {
  skip: InputMaybe<Scalars['Int']>;
  limit: InputMaybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

export type SitePluginEdge = {
  next: Maybe<SitePlugin>;
  node: SitePlugin;
  previous: Maybe<SitePlugin>;
};

export type SitePluginFieldsEnum =
  | 'resolve'
  | 'name'
  | 'version'
  | 'nodeAPIs'
  | 'browserAPIs'
  | 'ssrAPIs'
  | 'pluginFilepath'
  | 'pluginOptions'
  | 'packageJson'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SitePluginGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  sum: Maybe<Scalars['Float']>;
  group: Array<SitePluginGroupConnection>;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
};


export type SitePluginGroupConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginGroupConnectionMaxArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginGroupConnectionMinArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginGroupConnectionSumArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginGroupConnectionGroupArgs = {
  skip: InputMaybe<Scalars['Int']>;
  limit: InputMaybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

export type SitePluginSortInput = {
  fields: InputMaybe<Array<InputMaybe<SitePluginFieldsEnum>>>;
  order: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SiteBuildMetadataConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  sum: Maybe<Scalars['Float']>;
  group: Array<SiteBuildMetadataGroupConnection>;
};


export type SiteBuildMetadataConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionMaxArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionMinArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionSumArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionGroupArgs = {
  skip: InputMaybe<Scalars['Int']>;
  limit: InputMaybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataEdge = {
  next: Maybe<SiteBuildMetadata>;
  node: SiteBuildMetadata;
  previous: Maybe<SiteBuildMetadata>;
};

export type SiteBuildMetadataFieldsEnum =
  | 'buildTime'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SiteBuildMetadataGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  sum: Maybe<Scalars['Float']>;
  group: Array<SiteBuildMetadataGroupConnection>;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
};


export type SiteBuildMetadataGroupConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataGroupConnectionMaxArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataGroupConnectionMinArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataGroupConnectionSumArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataGroupConnectionGroupArgs = {
  skip: InputMaybe<Scalars['Int']>;
  limit: InputMaybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataFilterInput = {
  buildTime: InputMaybe<DateQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  children: InputMaybe<NodeFilterListInput>;
  internal: InputMaybe<InternalFilterInput>;
};

export type SiteBuildMetadataSortInput = {
  fields: InputMaybe<Array<InputMaybe<SiteBuildMetadataFieldsEnum>>>;
  order: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SanitySlugFilterInput = {
  _key: InputMaybe<StringQueryOperatorInput>;
  _type: InputMaybe<StringQueryOperatorInput>;
  current: InputMaybe<StringQueryOperatorInput>;
};

export type SanityMainImageFilterInput = {
  _key: InputMaybe<StringQueryOperatorInput>;
  _type: InputMaybe<StringQueryOperatorInput>;
  asset: InputMaybe<SanityImageAssetFilterInput>;
  hotspot: InputMaybe<SanityImageHotspotFilterInput>;
  crop: InputMaybe<SanityImageCropFilterInput>;
  alt: InputMaybe<StringQueryOperatorInput>;
  _rawAsset: InputMaybe<JsonQueryOperatorInput>;
  _rawHotspot: InputMaybe<JsonQueryOperatorInput>;
  _rawCrop: InputMaybe<JsonQueryOperatorInput>;
};

export type SanityImageAssetFilterInput = {
  _id: InputMaybe<StringQueryOperatorInput>;
  _type: InputMaybe<StringQueryOperatorInput>;
  _createdAt: InputMaybe<DateQueryOperatorInput>;
  _updatedAt: InputMaybe<DateQueryOperatorInput>;
  _rev: InputMaybe<StringQueryOperatorInput>;
  _key: InputMaybe<StringQueryOperatorInput>;
  originalFilename: InputMaybe<StringQueryOperatorInput>;
  label: InputMaybe<StringQueryOperatorInput>;
  title: InputMaybe<StringQueryOperatorInput>;
  description: InputMaybe<StringQueryOperatorInput>;
  altText: InputMaybe<StringQueryOperatorInput>;
  sha1hash: InputMaybe<StringQueryOperatorInput>;
  extension: InputMaybe<StringQueryOperatorInput>;
  mimeType: InputMaybe<StringQueryOperatorInput>;
  size: InputMaybe<FloatQueryOperatorInput>;
  assetId: InputMaybe<StringQueryOperatorInput>;
  uploadId: InputMaybe<StringQueryOperatorInput>;
  path: InputMaybe<StringQueryOperatorInput>;
  url: InputMaybe<StringQueryOperatorInput>;
  metadata: InputMaybe<SanityImageMetadataFilterInput>;
  source: InputMaybe<SanityAssetSourceDataFilterInput>;
  _rawMetadata: InputMaybe<JsonQueryOperatorInput>;
  _rawSource: InputMaybe<JsonQueryOperatorInput>;
  gatsbyImageData: InputMaybe<JsonQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  children: InputMaybe<NodeFilterListInput>;
  internal: InputMaybe<InternalFilterInput>;
};

export type SanityImageMetadataFilterInput = {
  _key: InputMaybe<StringQueryOperatorInput>;
  _type: InputMaybe<StringQueryOperatorInput>;
  location: InputMaybe<SanityGeopointFilterInput>;
  dimensions: InputMaybe<SanityImageDimensionsFilterInput>;
  palette: InputMaybe<SanityImagePaletteFilterInput>;
  lqip: InputMaybe<StringQueryOperatorInput>;
  blurHash: InputMaybe<StringQueryOperatorInput>;
  hasAlpha: InputMaybe<BooleanQueryOperatorInput>;
  isOpaque: InputMaybe<BooleanQueryOperatorInput>;
  _rawLocation: InputMaybe<JsonQueryOperatorInput>;
  _rawDimensions: InputMaybe<JsonQueryOperatorInput>;
  _rawPalette: InputMaybe<JsonQueryOperatorInput>;
};

export type SanityGeopointFilterInput = {
  _key: InputMaybe<StringQueryOperatorInput>;
  _type: InputMaybe<StringQueryOperatorInput>;
  lat: InputMaybe<FloatQueryOperatorInput>;
  lng: InputMaybe<FloatQueryOperatorInput>;
  alt: InputMaybe<FloatQueryOperatorInput>;
};

export type SanityImageDimensionsFilterInput = {
  _key: InputMaybe<StringQueryOperatorInput>;
  _type: InputMaybe<StringQueryOperatorInput>;
  height: InputMaybe<FloatQueryOperatorInput>;
  width: InputMaybe<FloatQueryOperatorInput>;
  aspectRatio: InputMaybe<FloatQueryOperatorInput>;
};

export type SanityImagePaletteFilterInput = {
  _key: InputMaybe<StringQueryOperatorInput>;
  _type: InputMaybe<StringQueryOperatorInput>;
  darkMuted: InputMaybe<SanityImagePaletteSwatchFilterInput>;
  lightVibrant: InputMaybe<SanityImagePaletteSwatchFilterInput>;
  darkVibrant: InputMaybe<SanityImagePaletteSwatchFilterInput>;
  vibrant: InputMaybe<SanityImagePaletteSwatchFilterInput>;
  dominant: InputMaybe<SanityImagePaletteSwatchFilterInput>;
  lightMuted: InputMaybe<SanityImagePaletteSwatchFilterInput>;
  muted: InputMaybe<SanityImagePaletteSwatchFilterInput>;
  _rawDarkMuted: InputMaybe<JsonQueryOperatorInput>;
  _rawLightVibrant: InputMaybe<JsonQueryOperatorInput>;
  _rawDarkVibrant: InputMaybe<JsonQueryOperatorInput>;
  _rawVibrant: InputMaybe<JsonQueryOperatorInput>;
  _rawDominant: InputMaybe<JsonQueryOperatorInput>;
  _rawLightMuted: InputMaybe<JsonQueryOperatorInput>;
  _rawMuted: InputMaybe<JsonQueryOperatorInput>;
};

export type SanityImagePaletteSwatchFilterInput = {
  _key: InputMaybe<StringQueryOperatorInput>;
  _type: InputMaybe<StringQueryOperatorInput>;
  background: InputMaybe<StringQueryOperatorInput>;
  foreground: InputMaybe<StringQueryOperatorInput>;
  population: InputMaybe<FloatQueryOperatorInput>;
  title: InputMaybe<StringQueryOperatorInput>;
};

export type SanityAssetSourceDataFilterInput = {
  _key: InputMaybe<StringQueryOperatorInput>;
  _type: InputMaybe<StringQueryOperatorInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  url: InputMaybe<StringQueryOperatorInput>;
};

export type SanityImageHotspotFilterInput = {
  _key: InputMaybe<StringQueryOperatorInput>;
  _type: InputMaybe<StringQueryOperatorInput>;
  x: InputMaybe<FloatQueryOperatorInput>;
  y: InputMaybe<FloatQueryOperatorInput>;
  height: InputMaybe<FloatQueryOperatorInput>;
  width: InputMaybe<FloatQueryOperatorInput>;
};

export type SanityImageCropFilterInput = {
  _key: InputMaybe<StringQueryOperatorInput>;
  _type: InputMaybe<StringQueryOperatorInput>;
  top: InputMaybe<FloatQueryOperatorInput>;
  bottom: InputMaybe<FloatQueryOperatorInput>;
  left: InputMaybe<FloatQueryOperatorInput>;
  right: InputMaybe<FloatQueryOperatorInput>;
};

export type SanityCategoryConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SanityCategoryEdge>;
  nodes: Array<SanityCategory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  sum: Maybe<Scalars['Float']>;
  group: Array<SanityCategoryGroupConnection>;
};


export type SanityCategoryConnectionDistinctArgs = {
  field: SanityCategoryFieldsEnum;
};


export type SanityCategoryConnectionMaxArgs = {
  field: SanityCategoryFieldsEnum;
};


export type SanityCategoryConnectionMinArgs = {
  field: SanityCategoryFieldsEnum;
};


export type SanityCategoryConnectionSumArgs = {
  field: SanityCategoryFieldsEnum;
};


export type SanityCategoryConnectionGroupArgs = {
  skip: InputMaybe<Scalars['Int']>;
  limit: InputMaybe<Scalars['Int']>;
  field: SanityCategoryFieldsEnum;
};

export type SanityCategoryEdge = {
  next: Maybe<SanityCategory>;
  node: SanityCategory;
  previous: Maybe<SanityCategory>;
};

export type SanityCategoryFieldsEnum =
  | '_id'
  | '_type'
  | '_createdAt'
  | '_updatedAt'
  | '_rev'
  | '_key'
  | 'orderRank'
  | 'name'
  | 'slug____key'
  | 'slug____type'
  | 'slug___current'
  | 'image____key'
  | 'image____type'
  | 'image___asset____id'
  | 'image___asset____type'
  | 'image___asset____createdAt'
  | 'image___asset____updatedAt'
  | 'image___asset____rev'
  | 'image___asset____key'
  | 'image___asset___originalFilename'
  | 'image___asset___label'
  | 'image___asset___title'
  | 'image___asset___description'
  | 'image___asset___altText'
  | 'image___asset___sha1hash'
  | 'image___asset___extension'
  | 'image___asset___mimeType'
  | 'image___asset___size'
  | 'image___asset___assetId'
  | 'image___asset___uploadId'
  | 'image___asset___path'
  | 'image___asset___url'
  | 'image___asset___metadata____key'
  | 'image___asset___metadata____type'
  | 'image___asset___metadata___lqip'
  | 'image___asset___metadata___blurHash'
  | 'image___asset___metadata___hasAlpha'
  | 'image___asset___metadata___isOpaque'
  | 'image___asset___metadata____rawLocation'
  | 'image___asset___metadata____rawDimensions'
  | 'image___asset___metadata____rawPalette'
  | 'image___asset___source____key'
  | 'image___asset___source____type'
  | 'image___asset___source___name'
  | 'image___asset___source___id'
  | 'image___asset___source___url'
  | 'image___asset____rawMetadata'
  | 'image___asset____rawSource'
  | 'image___asset___gatsbyImageData'
  | 'image___asset___id'
  | 'image___asset___parent___id'
  | 'image___asset___parent___children'
  | 'image___asset___children'
  | 'image___asset___children___id'
  | 'image___asset___children___children'
  | 'image___asset___internal___content'
  | 'image___asset___internal___contentDigest'
  | 'image___asset___internal___description'
  | 'image___asset___internal___fieldOwners'
  | 'image___asset___internal___ignoreType'
  | 'image___asset___internal___mediaType'
  | 'image___asset___internal___owner'
  | 'image___asset___internal___type'
  | 'image___hotspot____key'
  | 'image___hotspot____type'
  | 'image___hotspot___x'
  | 'image___hotspot___y'
  | 'image___hotspot___height'
  | 'image___hotspot___width'
  | 'image___crop____key'
  | 'image___crop____type'
  | 'image___crop___top'
  | 'image___crop___bottom'
  | 'image___crop___left'
  | 'image___crop___right'
  | 'image___alt'
  | 'image____rawAsset'
  | 'image____rawHotspot'
  | 'image____rawCrop'
  | '_rawSlug'
  | '_rawImage'
  | 'gatsbyPath'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SanityCategoryGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SanityCategoryEdge>;
  nodes: Array<SanityCategory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  sum: Maybe<Scalars['Float']>;
  group: Array<SanityCategoryGroupConnection>;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
};


export type SanityCategoryGroupConnectionDistinctArgs = {
  field: SanityCategoryFieldsEnum;
};


export type SanityCategoryGroupConnectionMaxArgs = {
  field: SanityCategoryFieldsEnum;
};


export type SanityCategoryGroupConnectionMinArgs = {
  field: SanityCategoryFieldsEnum;
};


export type SanityCategoryGroupConnectionSumArgs = {
  field: SanityCategoryFieldsEnum;
};


export type SanityCategoryGroupConnectionGroupArgs = {
  skip: InputMaybe<Scalars['Int']>;
  limit: InputMaybe<Scalars['Int']>;
  field: SanityCategoryFieldsEnum;
};

export type SanityCategoryFilterInput = {
  _id: InputMaybe<StringQueryOperatorInput>;
  _type: InputMaybe<StringQueryOperatorInput>;
  _createdAt: InputMaybe<DateQueryOperatorInput>;
  _updatedAt: InputMaybe<DateQueryOperatorInput>;
  _rev: InputMaybe<StringQueryOperatorInput>;
  _key: InputMaybe<StringQueryOperatorInput>;
  orderRank: InputMaybe<StringQueryOperatorInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  slug: InputMaybe<SanitySlugFilterInput>;
  image: InputMaybe<SanityMainImageFilterInput>;
  _rawSlug: InputMaybe<JsonQueryOperatorInput>;
  _rawImage: InputMaybe<JsonQueryOperatorInput>;
  gatsbyPath: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  children: InputMaybe<NodeFilterListInput>;
  internal: InputMaybe<InternalFilterInput>;
};

export type SanityCategorySortInput = {
  fields: InputMaybe<Array<InputMaybe<SanityCategoryFieldsEnum>>>;
  order: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SanityImageFilterInput = {
  _key: InputMaybe<StringQueryOperatorInput>;
  _type: InputMaybe<StringQueryOperatorInput>;
  asset: InputMaybe<SanityImageAssetFilterInput>;
  hotspot: InputMaybe<SanityImageHotspotFilterInput>;
  crop: InputMaybe<SanityImageCropFilterInput>;
  _rawAsset: InputMaybe<JsonQueryOperatorInput>;
  _rawHotspot: InputMaybe<JsonQueryOperatorInput>;
  _rawCrop: InputMaybe<JsonQueryOperatorInput>;
};

export type SanityAboutSectionFilterInput = {
  _key: InputMaybe<StringQueryOperatorInput>;
  _type: InputMaybe<StringQueryOperatorInput>;
  text: InputMaybe<StringQueryOperatorInput>;
  images: InputMaybe<SanityResponsiveImagesFilterInput>;
  title: InputMaybe<SanityBlockFilterListInput>;
  _rawTitle: InputMaybe<JsonQueryOperatorInput>;
  _rawImages: InputMaybe<JsonQueryOperatorInput>;
};

export type SanityResponsiveImagesFilterInput = {
  _key: InputMaybe<StringQueryOperatorInput>;
  _type: InputMaybe<StringQueryOperatorInput>;
  mobile: InputMaybe<SanityMainImageFilterInput>;
  tablet: InputMaybe<SanityMainImageFilterInput>;
  desktop: InputMaybe<SanityMainImageFilterInput>;
  _rawMobile: InputMaybe<JsonQueryOperatorInput>;
  _rawTablet: InputMaybe<JsonQueryOperatorInput>;
  _rawDesktop: InputMaybe<JsonQueryOperatorInput>;
};

export type SanityBlockFilterListInput = {
  elemMatch: InputMaybe<SanityBlockFilterInput>;
};

export type SanityBlockFilterInput = {
  _key: InputMaybe<StringQueryOperatorInput>;
  _type: InputMaybe<StringQueryOperatorInput>;
  children: InputMaybe<SanitySpanFilterListInput>;
  style: InputMaybe<StringQueryOperatorInput>;
  list: InputMaybe<StringQueryOperatorInput>;
  _rawChildren: InputMaybe<JsonQueryOperatorInput>;
};

export type SanitySpanFilterListInput = {
  elemMatch: InputMaybe<SanitySpanFilterInput>;
};

export type SanitySpanFilterInput = {
  _key: InputMaybe<StringQueryOperatorInput>;
  _type: InputMaybe<StringQueryOperatorInput>;
  marks: InputMaybe<StringQueryOperatorInput>;
  text: InputMaybe<StringQueryOperatorInput>;
};

export type SanityGlobalDataConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SanityGlobalDataEdge>;
  nodes: Array<SanityGlobalData>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  sum: Maybe<Scalars['Float']>;
  group: Array<SanityGlobalDataGroupConnection>;
};


export type SanityGlobalDataConnectionDistinctArgs = {
  field: SanityGlobalDataFieldsEnum;
};


export type SanityGlobalDataConnectionMaxArgs = {
  field: SanityGlobalDataFieldsEnum;
};


export type SanityGlobalDataConnectionMinArgs = {
  field: SanityGlobalDataFieldsEnum;
};


export type SanityGlobalDataConnectionSumArgs = {
  field: SanityGlobalDataFieldsEnum;
};


export type SanityGlobalDataConnectionGroupArgs = {
  skip: InputMaybe<Scalars['Int']>;
  limit: InputMaybe<Scalars['Int']>;
  field: SanityGlobalDataFieldsEnum;
};

export type SanityGlobalDataEdge = {
  next: Maybe<SanityGlobalData>;
  node: SanityGlobalData;
  previous: Maybe<SanityGlobalData>;
};

export type SanityGlobalDataFieldsEnum =
  | '_id'
  | '_type'
  | '_createdAt'
  | '_updatedAt'
  | '_rev'
  | '_key'
  | 'logo____key'
  | 'logo____type'
  | 'logo___asset____id'
  | 'logo___asset____type'
  | 'logo___asset____createdAt'
  | 'logo___asset____updatedAt'
  | 'logo___asset____rev'
  | 'logo___asset____key'
  | 'logo___asset___originalFilename'
  | 'logo___asset___label'
  | 'logo___asset___title'
  | 'logo___asset___description'
  | 'logo___asset___altText'
  | 'logo___asset___sha1hash'
  | 'logo___asset___extension'
  | 'logo___asset___mimeType'
  | 'logo___asset___size'
  | 'logo___asset___assetId'
  | 'logo___asset___uploadId'
  | 'logo___asset___path'
  | 'logo___asset___url'
  | 'logo___asset___metadata____key'
  | 'logo___asset___metadata____type'
  | 'logo___asset___metadata___lqip'
  | 'logo___asset___metadata___blurHash'
  | 'logo___asset___metadata___hasAlpha'
  | 'logo___asset___metadata___isOpaque'
  | 'logo___asset___metadata____rawLocation'
  | 'logo___asset___metadata____rawDimensions'
  | 'logo___asset___metadata____rawPalette'
  | 'logo___asset___source____key'
  | 'logo___asset___source____type'
  | 'logo___asset___source___name'
  | 'logo___asset___source___id'
  | 'logo___asset___source___url'
  | 'logo___asset____rawMetadata'
  | 'logo___asset____rawSource'
  | 'logo___asset___gatsbyImageData'
  | 'logo___asset___id'
  | 'logo___asset___parent___id'
  | 'logo___asset___parent___children'
  | 'logo___asset___children'
  | 'logo___asset___children___id'
  | 'logo___asset___children___children'
  | 'logo___asset___internal___content'
  | 'logo___asset___internal___contentDigest'
  | 'logo___asset___internal___description'
  | 'logo___asset___internal___fieldOwners'
  | 'logo___asset___internal___ignoreType'
  | 'logo___asset___internal___mediaType'
  | 'logo___asset___internal___owner'
  | 'logo___asset___internal___type'
  | 'logo___hotspot____key'
  | 'logo___hotspot____type'
  | 'logo___hotspot___x'
  | 'logo___hotspot___y'
  | 'logo___hotspot___height'
  | 'logo___hotspot___width'
  | 'logo___crop____key'
  | 'logo___crop____type'
  | 'logo___crop___top'
  | 'logo___crop___bottom'
  | 'logo___crop___left'
  | 'logo___crop___right'
  | 'logo____rawAsset'
  | 'logo____rawHotspot'
  | 'logo____rawCrop'
  | 'aboutSection____key'
  | 'aboutSection____type'
  | 'aboutSection___text'
  | 'aboutSection___images____key'
  | 'aboutSection___images____type'
  | 'aboutSection___images___mobile____key'
  | 'aboutSection___images___mobile____type'
  | 'aboutSection___images___mobile___alt'
  | 'aboutSection___images___mobile____rawAsset'
  | 'aboutSection___images___mobile____rawHotspot'
  | 'aboutSection___images___mobile____rawCrop'
  | 'aboutSection___images___tablet____key'
  | 'aboutSection___images___tablet____type'
  | 'aboutSection___images___tablet___alt'
  | 'aboutSection___images___tablet____rawAsset'
  | 'aboutSection___images___tablet____rawHotspot'
  | 'aboutSection___images___tablet____rawCrop'
  | 'aboutSection___images___desktop____key'
  | 'aboutSection___images___desktop____type'
  | 'aboutSection___images___desktop___alt'
  | 'aboutSection___images___desktop____rawAsset'
  | 'aboutSection___images___desktop____rawHotspot'
  | 'aboutSection___images___desktop____rawCrop'
  | 'aboutSection___images____rawMobile'
  | 'aboutSection___images____rawTablet'
  | 'aboutSection___images____rawDesktop'
  | 'aboutSection___title'
  | 'aboutSection___title____key'
  | 'aboutSection___title____type'
  | 'aboutSection___title___children'
  | 'aboutSection___title___children____key'
  | 'aboutSection___title___children____type'
  | 'aboutSection___title___children___marks'
  | 'aboutSection___title___children___text'
  | 'aboutSection___title___style'
  | 'aboutSection___title___list'
  | 'aboutSection___title____rawChildren'
  | 'aboutSection____rawTitle'
  | 'aboutSection____rawImages'
  | 'footerCopy'
  | '_rawLogo'
  | '_rawAboutSection'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SanityGlobalDataGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SanityGlobalDataEdge>;
  nodes: Array<SanityGlobalData>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  sum: Maybe<Scalars['Float']>;
  group: Array<SanityGlobalDataGroupConnection>;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
};


export type SanityGlobalDataGroupConnectionDistinctArgs = {
  field: SanityGlobalDataFieldsEnum;
};


export type SanityGlobalDataGroupConnectionMaxArgs = {
  field: SanityGlobalDataFieldsEnum;
};


export type SanityGlobalDataGroupConnectionMinArgs = {
  field: SanityGlobalDataFieldsEnum;
};


export type SanityGlobalDataGroupConnectionSumArgs = {
  field: SanityGlobalDataFieldsEnum;
};


export type SanityGlobalDataGroupConnectionGroupArgs = {
  skip: InputMaybe<Scalars['Int']>;
  limit: InputMaybe<Scalars['Int']>;
  field: SanityGlobalDataFieldsEnum;
};

export type SanityGlobalDataFilterInput = {
  _id: InputMaybe<StringQueryOperatorInput>;
  _type: InputMaybe<StringQueryOperatorInput>;
  _createdAt: InputMaybe<DateQueryOperatorInput>;
  _updatedAt: InputMaybe<DateQueryOperatorInput>;
  _rev: InputMaybe<StringQueryOperatorInput>;
  _key: InputMaybe<StringQueryOperatorInput>;
  logo: InputMaybe<SanityImageFilterInput>;
  aboutSection: InputMaybe<SanityAboutSectionFilterInput>;
  footerCopy: InputMaybe<StringQueryOperatorInput>;
  _rawLogo: InputMaybe<JsonQueryOperatorInput>;
  _rawAboutSection: InputMaybe<JsonQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  children: InputMaybe<NodeFilterListInput>;
  internal: InputMaybe<InternalFilterInput>;
};

export type SanityGlobalDataSortInput = {
  fields: InputMaybe<Array<InputMaybe<SanityGlobalDataFieldsEnum>>>;
  order: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SanityBoxContentFilterListInput = {
  elemMatch: InputMaybe<SanityBoxContentFilterInput>;
};

export type SanityBoxContentFilterInput = {
  _key: InputMaybe<StringQueryOperatorInput>;
  _type: InputMaybe<StringQueryOperatorInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  quantity: InputMaybe<FloatQueryOperatorInput>;
};

export type SanityResponsiveImagesFilterListInput = {
  elemMatch: InputMaybe<SanityResponsiveImagesFilterInput>;
};

export type SanityProductFilterListInput = {
  elemMatch: InputMaybe<SanityProductFilterInput>;
};

export type SanityProductFilterInput = {
  _id: InputMaybe<StringQueryOperatorInput>;
  _type: InputMaybe<StringQueryOperatorInput>;
  _createdAt: InputMaybe<DateQueryOperatorInput>;
  _updatedAt: InputMaybe<DateQueryOperatorInput>;
  _rev: InputMaybe<StringQueryOperatorInput>;
  _key: InputMaybe<StringQueryOperatorInput>;
  orderRank: InputMaybe<StringQueryOperatorInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  shortName: InputMaybe<StringQueryOperatorInput>;
  slug: InputMaybe<SanitySlugFilterInput>;
  image: InputMaybe<SanityMainImageFilterInput>;
  heroImages: InputMaybe<SanityResponsiveImagesFilterInput>;
  productImages: InputMaybe<SanityResponsiveImagesFilterInput>;
  previewImages: InputMaybe<SanityResponsiveImagesFilterInput>;
  featured: InputMaybe<BooleanQueryOperatorInput>;
  featuredImages: InputMaybe<SanityResponsiveImagesFilterInput>;
  category: InputMaybe<SanityCategoryFilterInput>;
  new: InputMaybe<BooleanQueryOperatorInput>;
  price: InputMaybe<FloatQueryOperatorInput>;
  description: InputMaybe<StringQueryOperatorInput>;
  includes: InputMaybe<SanityBoxContentFilterListInput>;
  gallery: InputMaybe<SanityResponsiveImagesFilterListInput>;
  related: InputMaybe<SanityProductFilterListInput>;
  features: InputMaybe<SanityBlockFilterListInput>;
  _rawSlug: InputMaybe<JsonQueryOperatorInput>;
  _rawImage: InputMaybe<JsonQueryOperatorInput>;
  _rawHeroImages: InputMaybe<JsonQueryOperatorInput>;
  _rawProductImages: InputMaybe<JsonQueryOperatorInput>;
  _rawPreviewImages: InputMaybe<JsonQueryOperatorInput>;
  _rawFeaturedImages: InputMaybe<JsonQueryOperatorInput>;
  _rawCategory: InputMaybe<JsonQueryOperatorInput>;
  _rawFeatures: InputMaybe<JsonQueryOperatorInput>;
  _rawIncludes: InputMaybe<JsonQueryOperatorInput>;
  _rawGallery: InputMaybe<JsonQueryOperatorInput>;
  _rawRelated: InputMaybe<JsonQueryOperatorInput>;
  gatsbyPath: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  children: InputMaybe<NodeFilterListInput>;
  internal: InputMaybe<InternalFilterInput>;
};

export type SanityProductConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SanityProductEdge>;
  nodes: Array<SanityProduct>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  sum: Maybe<Scalars['Float']>;
  group: Array<SanityProductGroupConnection>;
};


export type SanityProductConnectionDistinctArgs = {
  field: SanityProductFieldsEnum;
};


export type SanityProductConnectionMaxArgs = {
  field: SanityProductFieldsEnum;
};


export type SanityProductConnectionMinArgs = {
  field: SanityProductFieldsEnum;
};


export type SanityProductConnectionSumArgs = {
  field: SanityProductFieldsEnum;
};


export type SanityProductConnectionGroupArgs = {
  skip: InputMaybe<Scalars['Int']>;
  limit: InputMaybe<Scalars['Int']>;
  field: SanityProductFieldsEnum;
};

export type SanityProductEdge = {
  next: Maybe<SanityProduct>;
  node: SanityProduct;
  previous: Maybe<SanityProduct>;
};

export type SanityProductFieldsEnum =
  | '_id'
  | '_type'
  | '_createdAt'
  | '_updatedAt'
  | '_rev'
  | '_key'
  | 'orderRank'
  | 'name'
  | 'shortName'
  | 'slug____key'
  | 'slug____type'
  | 'slug___current'
  | 'image____key'
  | 'image____type'
  | 'image___asset____id'
  | 'image___asset____type'
  | 'image___asset____createdAt'
  | 'image___asset____updatedAt'
  | 'image___asset____rev'
  | 'image___asset____key'
  | 'image___asset___originalFilename'
  | 'image___asset___label'
  | 'image___asset___title'
  | 'image___asset___description'
  | 'image___asset___altText'
  | 'image___asset___sha1hash'
  | 'image___asset___extension'
  | 'image___asset___mimeType'
  | 'image___asset___size'
  | 'image___asset___assetId'
  | 'image___asset___uploadId'
  | 'image___asset___path'
  | 'image___asset___url'
  | 'image___asset___metadata____key'
  | 'image___asset___metadata____type'
  | 'image___asset___metadata___lqip'
  | 'image___asset___metadata___blurHash'
  | 'image___asset___metadata___hasAlpha'
  | 'image___asset___metadata___isOpaque'
  | 'image___asset___metadata____rawLocation'
  | 'image___asset___metadata____rawDimensions'
  | 'image___asset___metadata____rawPalette'
  | 'image___asset___source____key'
  | 'image___asset___source____type'
  | 'image___asset___source___name'
  | 'image___asset___source___id'
  | 'image___asset___source___url'
  | 'image___asset____rawMetadata'
  | 'image___asset____rawSource'
  | 'image___asset___gatsbyImageData'
  | 'image___asset___id'
  | 'image___asset___parent___id'
  | 'image___asset___parent___children'
  | 'image___asset___children'
  | 'image___asset___children___id'
  | 'image___asset___children___children'
  | 'image___asset___internal___content'
  | 'image___asset___internal___contentDigest'
  | 'image___asset___internal___description'
  | 'image___asset___internal___fieldOwners'
  | 'image___asset___internal___ignoreType'
  | 'image___asset___internal___mediaType'
  | 'image___asset___internal___owner'
  | 'image___asset___internal___type'
  | 'image___hotspot____key'
  | 'image___hotspot____type'
  | 'image___hotspot___x'
  | 'image___hotspot___y'
  | 'image___hotspot___height'
  | 'image___hotspot___width'
  | 'image___crop____key'
  | 'image___crop____type'
  | 'image___crop___top'
  | 'image___crop___bottom'
  | 'image___crop___left'
  | 'image___crop___right'
  | 'image___alt'
  | 'image____rawAsset'
  | 'image____rawHotspot'
  | 'image____rawCrop'
  | 'heroImages____key'
  | 'heroImages____type'
  | 'heroImages___mobile____key'
  | 'heroImages___mobile____type'
  | 'heroImages___mobile___asset____id'
  | 'heroImages___mobile___asset____type'
  | 'heroImages___mobile___asset____createdAt'
  | 'heroImages___mobile___asset____updatedAt'
  | 'heroImages___mobile___asset____rev'
  | 'heroImages___mobile___asset____key'
  | 'heroImages___mobile___asset___originalFilename'
  | 'heroImages___mobile___asset___label'
  | 'heroImages___mobile___asset___title'
  | 'heroImages___mobile___asset___description'
  | 'heroImages___mobile___asset___altText'
  | 'heroImages___mobile___asset___sha1hash'
  | 'heroImages___mobile___asset___extension'
  | 'heroImages___mobile___asset___mimeType'
  | 'heroImages___mobile___asset___size'
  | 'heroImages___mobile___asset___assetId'
  | 'heroImages___mobile___asset___uploadId'
  | 'heroImages___mobile___asset___path'
  | 'heroImages___mobile___asset___url'
  | 'heroImages___mobile___asset____rawMetadata'
  | 'heroImages___mobile___asset____rawSource'
  | 'heroImages___mobile___asset___gatsbyImageData'
  | 'heroImages___mobile___asset___id'
  | 'heroImages___mobile___asset___children'
  | 'heroImages___mobile___hotspot____key'
  | 'heroImages___mobile___hotspot____type'
  | 'heroImages___mobile___hotspot___x'
  | 'heroImages___mobile___hotspot___y'
  | 'heroImages___mobile___hotspot___height'
  | 'heroImages___mobile___hotspot___width'
  | 'heroImages___mobile___crop____key'
  | 'heroImages___mobile___crop____type'
  | 'heroImages___mobile___crop___top'
  | 'heroImages___mobile___crop___bottom'
  | 'heroImages___mobile___crop___left'
  | 'heroImages___mobile___crop___right'
  | 'heroImages___mobile___alt'
  | 'heroImages___mobile____rawAsset'
  | 'heroImages___mobile____rawHotspot'
  | 'heroImages___mobile____rawCrop'
  | 'heroImages___tablet____key'
  | 'heroImages___tablet____type'
  | 'heroImages___tablet___asset____id'
  | 'heroImages___tablet___asset____type'
  | 'heroImages___tablet___asset____createdAt'
  | 'heroImages___tablet___asset____updatedAt'
  | 'heroImages___tablet___asset____rev'
  | 'heroImages___tablet___asset____key'
  | 'heroImages___tablet___asset___originalFilename'
  | 'heroImages___tablet___asset___label'
  | 'heroImages___tablet___asset___title'
  | 'heroImages___tablet___asset___description'
  | 'heroImages___tablet___asset___altText'
  | 'heroImages___tablet___asset___sha1hash'
  | 'heroImages___tablet___asset___extension'
  | 'heroImages___tablet___asset___mimeType'
  | 'heroImages___tablet___asset___size'
  | 'heroImages___tablet___asset___assetId'
  | 'heroImages___tablet___asset___uploadId'
  | 'heroImages___tablet___asset___path'
  | 'heroImages___tablet___asset___url'
  | 'heroImages___tablet___asset____rawMetadata'
  | 'heroImages___tablet___asset____rawSource'
  | 'heroImages___tablet___asset___gatsbyImageData'
  | 'heroImages___tablet___asset___id'
  | 'heroImages___tablet___asset___children'
  | 'heroImages___tablet___hotspot____key'
  | 'heroImages___tablet___hotspot____type'
  | 'heroImages___tablet___hotspot___x'
  | 'heroImages___tablet___hotspot___y'
  | 'heroImages___tablet___hotspot___height'
  | 'heroImages___tablet___hotspot___width'
  | 'heroImages___tablet___crop____key'
  | 'heroImages___tablet___crop____type'
  | 'heroImages___tablet___crop___top'
  | 'heroImages___tablet___crop___bottom'
  | 'heroImages___tablet___crop___left'
  | 'heroImages___tablet___crop___right'
  | 'heroImages___tablet___alt'
  | 'heroImages___tablet____rawAsset'
  | 'heroImages___tablet____rawHotspot'
  | 'heroImages___tablet____rawCrop'
  | 'heroImages___desktop____key'
  | 'heroImages___desktop____type'
  | 'heroImages___desktop___asset____id'
  | 'heroImages___desktop___asset____type'
  | 'heroImages___desktop___asset____createdAt'
  | 'heroImages___desktop___asset____updatedAt'
  | 'heroImages___desktop___asset____rev'
  | 'heroImages___desktop___asset____key'
  | 'heroImages___desktop___asset___originalFilename'
  | 'heroImages___desktop___asset___label'
  | 'heroImages___desktop___asset___title'
  | 'heroImages___desktop___asset___description'
  | 'heroImages___desktop___asset___altText'
  | 'heroImages___desktop___asset___sha1hash'
  | 'heroImages___desktop___asset___extension'
  | 'heroImages___desktop___asset___mimeType'
  | 'heroImages___desktop___asset___size'
  | 'heroImages___desktop___asset___assetId'
  | 'heroImages___desktop___asset___uploadId'
  | 'heroImages___desktop___asset___path'
  | 'heroImages___desktop___asset___url'
  | 'heroImages___desktop___asset____rawMetadata'
  | 'heroImages___desktop___asset____rawSource'
  | 'heroImages___desktop___asset___gatsbyImageData'
  | 'heroImages___desktop___asset___id'
  | 'heroImages___desktop___asset___children'
  | 'heroImages___desktop___hotspot____key'
  | 'heroImages___desktop___hotspot____type'
  | 'heroImages___desktop___hotspot___x'
  | 'heroImages___desktop___hotspot___y'
  | 'heroImages___desktop___hotspot___height'
  | 'heroImages___desktop___hotspot___width'
  | 'heroImages___desktop___crop____key'
  | 'heroImages___desktop___crop____type'
  | 'heroImages___desktop___crop___top'
  | 'heroImages___desktop___crop___bottom'
  | 'heroImages___desktop___crop___left'
  | 'heroImages___desktop___crop___right'
  | 'heroImages___desktop___alt'
  | 'heroImages___desktop____rawAsset'
  | 'heroImages___desktop____rawHotspot'
  | 'heroImages___desktop____rawCrop'
  | 'heroImages____rawMobile'
  | 'heroImages____rawTablet'
  | 'heroImages____rawDesktop'
  | 'productImages____key'
  | 'productImages____type'
  | 'productImages___mobile____key'
  | 'productImages___mobile____type'
  | 'productImages___mobile___asset____id'
  | 'productImages___mobile___asset____type'
  | 'productImages___mobile___asset____createdAt'
  | 'productImages___mobile___asset____updatedAt'
  | 'productImages___mobile___asset____rev'
  | 'productImages___mobile___asset____key'
  | 'productImages___mobile___asset___originalFilename'
  | 'productImages___mobile___asset___label'
  | 'productImages___mobile___asset___title'
  | 'productImages___mobile___asset___description'
  | 'productImages___mobile___asset___altText'
  | 'productImages___mobile___asset___sha1hash'
  | 'productImages___mobile___asset___extension'
  | 'productImages___mobile___asset___mimeType'
  | 'productImages___mobile___asset___size'
  | 'productImages___mobile___asset___assetId'
  | 'productImages___mobile___asset___uploadId'
  | 'productImages___mobile___asset___path'
  | 'productImages___mobile___asset___url'
  | 'productImages___mobile___asset____rawMetadata'
  | 'productImages___mobile___asset____rawSource'
  | 'productImages___mobile___asset___gatsbyImageData'
  | 'productImages___mobile___asset___id'
  | 'productImages___mobile___asset___children'
  | 'productImages___mobile___hotspot____key'
  | 'productImages___mobile___hotspot____type'
  | 'productImages___mobile___hotspot___x'
  | 'productImages___mobile___hotspot___y'
  | 'productImages___mobile___hotspot___height'
  | 'productImages___mobile___hotspot___width'
  | 'productImages___mobile___crop____key'
  | 'productImages___mobile___crop____type'
  | 'productImages___mobile___crop___top'
  | 'productImages___mobile___crop___bottom'
  | 'productImages___mobile___crop___left'
  | 'productImages___mobile___crop___right'
  | 'productImages___mobile___alt'
  | 'productImages___mobile____rawAsset'
  | 'productImages___mobile____rawHotspot'
  | 'productImages___mobile____rawCrop'
  | 'productImages___tablet____key'
  | 'productImages___tablet____type'
  | 'productImages___tablet___asset____id'
  | 'productImages___tablet___asset____type'
  | 'productImages___tablet___asset____createdAt'
  | 'productImages___tablet___asset____updatedAt'
  | 'productImages___tablet___asset____rev'
  | 'productImages___tablet___asset____key'
  | 'productImages___tablet___asset___originalFilename'
  | 'productImages___tablet___asset___label'
  | 'productImages___tablet___asset___title'
  | 'productImages___tablet___asset___description'
  | 'productImages___tablet___asset___altText'
  | 'productImages___tablet___asset___sha1hash'
  | 'productImages___tablet___asset___extension'
  | 'productImages___tablet___asset___mimeType'
  | 'productImages___tablet___asset___size'
  | 'productImages___tablet___asset___assetId'
  | 'productImages___tablet___asset___uploadId'
  | 'productImages___tablet___asset___path'
  | 'productImages___tablet___asset___url'
  | 'productImages___tablet___asset____rawMetadata'
  | 'productImages___tablet___asset____rawSource'
  | 'productImages___tablet___asset___gatsbyImageData'
  | 'productImages___tablet___asset___id'
  | 'productImages___tablet___asset___children'
  | 'productImages___tablet___hotspot____key'
  | 'productImages___tablet___hotspot____type'
  | 'productImages___tablet___hotspot___x'
  | 'productImages___tablet___hotspot___y'
  | 'productImages___tablet___hotspot___height'
  | 'productImages___tablet___hotspot___width'
  | 'productImages___tablet___crop____key'
  | 'productImages___tablet___crop____type'
  | 'productImages___tablet___crop___top'
  | 'productImages___tablet___crop___bottom'
  | 'productImages___tablet___crop___left'
  | 'productImages___tablet___crop___right'
  | 'productImages___tablet___alt'
  | 'productImages___tablet____rawAsset'
  | 'productImages___tablet____rawHotspot'
  | 'productImages___tablet____rawCrop'
  | 'productImages___desktop____key'
  | 'productImages___desktop____type'
  | 'productImages___desktop___asset____id'
  | 'productImages___desktop___asset____type'
  | 'productImages___desktop___asset____createdAt'
  | 'productImages___desktop___asset____updatedAt'
  | 'productImages___desktop___asset____rev'
  | 'productImages___desktop___asset____key'
  | 'productImages___desktop___asset___originalFilename'
  | 'productImages___desktop___asset___label'
  | 'productImages___desktop___asset___title'
  | 'productImages___desktop___asset___description'
  | 'productImages___desktop___asset___altText'
  | 'productImages___desktop___asset___sha1hash'
  | 'productImages___desktop___asset___extension'
  | 'productImages___desktop___asset___mimeType'
  | 'productImages___desktop___asset___size'
  | 'productImages___desktop___asset___assetId'
  | 'productImages___desktop___asset___uploadId'
  | 'productImages___desktop___asset___path'
  | 'productImages___desktop___asset___url'
  | 'productImages___desktop___asset____rawMetadata'
  | 'productImages___desktop___asset____rawSource'
  | 'productImages___desktop___asset___gatsbyImageData'
  | 'productImages___desktop___asset___id'
  | 'productImages___desktop___asset___children'
  | 'productImages___desktop___hotspot____key'
  | 'productImages___desktop___hotspot____type'
  | 'productImages___desktop___hotspot___x'
  | 'productImages___desktop___hotspot___y'
  | 'productImages___desktop___hotspot___height'
  | 'productImages___desktop___hotspot___width'
  | 'productImages___desktop___crop____key'
  | 'productImages___desktop___crop____type'
  | 'productImages___desktop___crop___top'
  | 'productImages___desktop___crop___bottom'
  | 'productImages___desktop___crop___left'
  | 'productImages___desktop___crop___right'
  | 'productImages___desktop___alt'
  | 'productImages___desktop____rawAsset'
  | 'productImages___desktop____rawHotspot'
  | 'productImages___desktop____rawCrop'
  | 'productImages____rawMobile'
  | 'productImages____rawTablet'
  | 'productImages____rawDesktop'
  | 'previewImages____key'
  | 'previewImages____type'
  | 'previewImages___mobile____key'
  | 'previewImages___mobile____type'
  | 'previewImages___mobile___asset____id'
  | 'previewImages___mobile___asset____type'
  | 'previewImages___mobile___asset____createdAt'
  | 'previewImages___mobile___asset____updatedAt'
  | 'previewImages___mobile___asset____rev'
  | 'previewImages___mobile___asset____key'
  | 'previewImages___mobile___asset___originalFilename'
  | 'previewImages___mobile___asset___label'
  | 'previewImages___mobile___asset___title'
  | 'previewImages___mobile___asset___description'
  | 'previewImages___mobile___asset___altText'
  | 'previewImages___mobile___asset___sha1hash'
  | 'previewImages___mobile___asset___extension'
  | 'previewImages___mobile___asset___mimeType'
  | 'previewImages___mobile___asset___size'
  | 'previewImages___mobile___asset___assetId'
  | 'previewImages___mobile___asset___uploadId'
  | 'previewImages___mobile___asset___path'
  | 'previewImages___mobile___asset___url'
  | 'previewImages___mobile___asset____rawMetadata'
  | 'previewImages___mobile___asset____rawSource'
  | 'previewImages___mobile___asset___gatsbyImageData'
  | 'previewImages___mobile___asset___id'
  | 'previewImages___mobile___asset___children'
  | 'previewImages___mobile___hotspot____key'
  | 'previewImages___mobile___hotspot____type'
  | 'previewImages___mobile___hotspot___x'
  | 'previewImages___mobile___hotspot___y'
  | 'previewImages___mobile___hotspot___height'
  | 'previewImages___mobile___hotspot___width'
  | 'previewImages___mobile___crop____key'
  | 'previewImages___mobile___crop____type'
  | 'previewImages___mobile___crop___top'
  | 'previewImages___mobile___crop___bottom'
  | 'previewImages___mobile___crop___left'
  | 'previewImages___mobile___crop___right'
  | 'previewImages___mobile___alt'
  | 'previewImages___mobile____rawAsset'
  | 'previewImages___mobile____rawHotspot'
  | 'previewImages___mobile____rawCrop'
  | 'previewImages___tablet____key'
  | 'previewImages___tablet____type'
  | 'previewImages___tablet___asset____id'
  | 'previewImages___tablet___asset____type'
  | 'previewImages___tablet___asset____createdAt'
  | 'previewImages___tablet___asset____updatedAt'
  | 'previewImages___tablet___asset____rev'
  | 'previewImages___tablet___asset____key'
  | 'previewImages___tablet___asset___originalFilename'
  | 'previewImages___tablet___asset___label'
  | 'previewImages___tablet___asset___title'
  | 'previewImages___tablet___asset___description'
  | 'previewImages___tablet___asset___altText'
  | 'previewImages___tablet___asset___sha1hash'
  | 'previewImages___tablet___asset___extension'
  | 'previewImages___tablet___asset___mimeType'
  | 'previewImages___tablet___asset___size'
  | 'previewImages___tablet___asset___assetId'
  | 'previewImages___tablet___asset___uploadId'
  | 'previewImages___tablet___asset___path'
  | 'previewImages___tablet___asset___url'
  | 'previewImages___tablet___asset____rawMetadata'
  | 'previewImages___tablet___asset____rawSource'
  | 'previewImages___tablet___asset___gatsbyImageData'
  | 'previewImages___tablet___asset___id'
  | 'previewImages___tablet___asset___children'
  | 'previewImages___tablet___hotspot____key'
  | 'previewImages___tablet___hotspot____type'
  | 'previewImages___tablet___hotspot___x'
  | 'previewImages___tablet___hotspot___y'
  | 'previewImages___tablet___hotspot___height'
  | 'previewImages___tablet___hotspot___width'
  | 'previewImages___tablet___crop____key'
  | 'previewImages___tablet___crop____type'
  | 'previewImages___tablet___crop___top'
  | 'previewImages___tablet___crop___bottom'
  | 'previewImages___tablet___crop___left'
  | 'previewImages___tablet___crop___right'
  | 'previewImages___tablet___alt'
  | 'previewImages___tablet____rawAsset'
  | 'previewImages___tablet____rawHotspot'
  | 'previewImages___tablet____rawCrop'
  | 'previewImages___desktop____key'
  | 'previewImages___desktop____type'
  | 'previewImages___desktop___asset____id'
  | 'previewImages___desktop___asset____type'
  | 'previewImages___desktop___asset____createdAt'
  | 'previewImages___desktop___asset____updatedAt'
  | 'previewImages___desktop___asset____rev'
  | 'previewImages___desktop___asset____key'
  | 'previewImages___desktop___asset___originalFilename'
  | 'previewImages___desktop___asset___label'
  | 'previewImages___desktop___asset___title'
  | 'previewImages___desktop___asset___description'
  | 'previewImages___desktop___asset___altText'
  | 'previewImages___desktop___asset___sha1hash'
  | 'previewImages___desktop___asset___extension'
  | 'previewImages___desktop___asset___mimeType'
  | 'previewImages___desktop___asset___size'
  | 'previewImages___desktop___asset___assetId'
  | 'previewImages___desktop___asset___uploadId'
  | 'previewImages___desktop___asset___path'
  | 'previewImages___desktop___asset___url'
  | 'previewImages___desktop___asset____rawMetadata'
  | 'previewImages___desktop___asset____rawSource'
  | 'previewImages___desktop___asset___gatsbyImageData'
  | 'previewImages___desktop___asset___id'
  | 'previewImages___desktop___asset___children'
  | 'previewImages___desktop___hotspot____key'
  | 'previewImages___desktop___hotspot____type'
  | 'previewImages___desktop___hotspot___x'
  | 'previewImages___desktop___hotspot___y'
  | 'previewImages___desktop___hotspot___height'
  | 'previewImages___desktop___hotspot___width'
  | 'previewImages___desktop___crop____key'
  | 'previewImages___desktop___crop____type'
  | 'previewImages___desktop___crop___top'
  | 'previewImages___desktop___crop___bottom'
  | 'previewImages___desktop___crop___left'
  | 'previewImages___desktop___crop___right'
  | 'previewImages___desktop___alt'
  | 'previewImages___desktop____rawAsset'
  | 'previewImages___desktop____rawHotspot'
  | 'previewImages___desktop____rawCrop'
  | 'previewImages____rawMobile'
  | 'previewImages____rawTablet'
  | 'previewImages____rawDesktop'
  | 'featured'
  | 'featuredImages____key'
  | 'featuredImages____type'
  | 'featuredImages___mobile____key'
  | 'featuredImages___mobile____type'
  | 'featuredImages___mobile___asset____id'
  | 'featuredImages___mobile___asset____type'
  | 'featuredImages___mobile___asset____createdAt'
  | 'featuredImages___mobile___asset____updatedAt'
  | 'featuredImages___mobile___asset____rev'
  | 'featuredImages___mobile___asset____key'
  | 'featuredImages___mobile___asset___originalFilename'
  | 'featuredImages___mobile___asset___label'
  | 'featuredImages___mobile___asset___title'
  | 'featuredImages___mobile___asset___description'
  | 'featuredImages___mobile___asset___altText'
  | 'featuredImages___mobile___asset___sha1hash'
  | 'featuredImages___mobile___asset___extension'
  | 'featuredImages___mobile___asset___mimeType'
  | 'featuredImages___mobile___asset___size'
  | 'featuredImages___mobile___asset___assetId'
  | 'featuredImages___mobile___asset___uploadId'
  | 'featuredImages___mobile___asset___path'
  | 'featuredImages___mobile___asset___url'
  | 'featuredImages___mobile___asset____rawMetadata'
  | 'featuredImages___mobile___asset____rawSource'
  | 'featuredImages___mobile___asset___gatsbyImageData'
  | 'featuredImages___mobile___asset___id'
  | 'featuredImages___mobile___asset___children'
  | 'featuredImages___mobile___hotspot____key'
  | 'featuredImages___mobile___hotspot____type'
  | 'featuredImages___mobile___hotspot___x'
  | 'featuredImages___mobile___hotspot___y'
  | 'featuredImages___mobile___hotspot___height'
  | 'featuredImages___mobile___hotspot___width'
  | 'featuredImages___mobile___crop____key'
  | 'featuredImages___mobile___crop____type'
  | 'featuredImages___mobile___crop___top'
  | 'featuredImages___mobile___crop___bottom'
  | 'featuredImages___mobile___crop___left'
  | 'featuredImages___mobile___crop___right'
  | 'featuredImages___mobile___alt'
  | 'featuredImages___mobile____rawAsset'
  | 'featuredImages___mobile____rawHotspot'
  | 'featuredImages___mobile____rawCrop'
  | 'featuredImages___tablet____key'
  | 'featuredImages___tablet____type'
  | 'featuredImages___tablet___asset____id'
  | 'featuredImages___tablet___asset____type'
  | 'featuredImages___tablet___asset____createdAt'
  | 'featuredImages___tablet___asset____updatedAt'
  | 'featuredImages___tablet___asset____rev'
  | 'featuredImages___tablet___asset____key'
  | 'featuredImages___tablet___asset___originalFilename'
  | 'featuredImages___tablet___asset___label'
  | 'featuredImages___tablet___asset___title'
  | 'featuredImages___tablet___asset___description'
  | 'featuredImages___tablet___asset___altText'
  | 'featuredImages___tablet___asset___sha1hash'
  | 'featuredImages___tablet___asset___extension'
  | 'featuredImages___tablet___asset___mimeType'
  | 'featuredImages___tablet___asset___size'
  | 'featuredImages___tablet___asset___assetId'
  | 'featuredImages___tablet___asset___uploadId'
  | 'featuredImages___tablet___asset___path'
  | 'featuredImages___tablet___asset___url'
  | 'featuredImages___tablet___asset____rawMetadata'
  | 'featuredImages___tablet___asset____rawSource'
  | 'featuredImages___tablet___asset___gatsbyImageData'
  | 'featuredImages___tablet___asset___id'
  | 'featuredImages___tablet___asset___children'
  | 'featuredImages___tablet___hotspot____key'
  | 'featuredImages___tablet___hotspot____type'
  | 'featuredImages___tablet___hotspot___x'
  | 'featuredImages___tablet___hotspot___y'
  | 'featuredImages___tablet___hotspot___height'
  | 'featuredImages___tablet___hotspot___width'
  | 'featuredImages___tablet___crop____key'
  | 'featuredImages___tablet___crop____type'
  | 'featuredImages___tablet___crop___top'
  | 'featuredImages___tablet___crop___bottom'
  | 'featuredImages___tablet___crop___left'
  | 'featuredImages___tablet___crop___right'
  | 'featuredImages___tablet___alt'
  | 'featuredImages___tablet____rawAsset'
  | 'featuredImages___tablet____rawHotspot'
  | 'featuredImages___tablet____rawCrop'
  | 'featuredImages___desktop____key'
  | 'featuredImages___desktop____type'
  | 'featuredImages___desktop___asset____id'
  | 'featuredImages___desktop___asset____type'
  | 'featuredImages___desktop___asset____createdAt'
  | 'featuredImages___desktop___asset____updatedAt'
  | 'featuredImages___desktop___asset____rev'
  | 'featuredImages___desktop___asset____key'
  | 'featuredImages___desktop___asset___originalFilename'
  | 'featuredImages___desktop___asset___label'
  | 'featuredImages___desktop___asset___title'
  | 'featuredImages___desktop___asset___description'
  | 'featuredImages___desktop___asset___altText'
  | 'featuredImages___desktop___asset___sha1hash'
  | 'featuredImages___desktop___asset___extension'
  | 'featuredImages___desktop___asset___mimeType'
  | 'featuredImages___desktop___asset___size'
  | 'featuredImages___desktop___asset___assetId'
  | 'featuredImages___desktop___asset___uploadId'
  | 'featuredImages___desktop___asset___path'
  | 'featuredImages___desktop___asset___url'
  | 'featuredImages___desktop___asset____rawMetadata'
  | 'featuredImages___desktop___asset____rawSource'
  | 'featuredImages___desktop___asset___gatsbyImageData'
  | 'featuredImages___desktop___asset___id'
  | 'featuredImages___desktop___asset___children'
  | 'featuredImages___desktop___hotspot____key'
  | 'featuredImages___desktop___hotspot____type'
  | 'featuredImages___desktop___hotspot___x'
  | 'featuredImages___desktop___hotspot___y'
  | 'featuredImages___desktop___hotspot___height'
  | 'featuredImages___desktop___hotspot___width'
  | 'featuredImages___desktop___crop____key'
  | 'featuredImages___desktop___crop____type'
  | 'featuredImages___desktop___crop___top'
  | 'featuredImages___desktop___crop___bottom'
  | 'featuredImages___desktop___crop___left'
  | 'featuredImages___desktop___crop___right'
  | 'featuredImages___desktop___alt'
  | 'featuredImages___desktop____rawAsset'
  | 'featuredImages___desktop____rawHotspot'
  | 'featuredImages___desktop____rawCrop'
  | 'featuredImages____rawMobile'
  | 'featuredImages____rawTablet'
  | 'featuredImages____rawDesktop'
  | 'category____id'
  | 'category____type'
  | 'category____createdAt'
  | 'category____updatedAt'
  | 'category____rev'
  | 'category____key'
  | 'category___orderRank'
  | 'category___name'
  | 'category___slug____key'
  | 'category___slug____type'
  | 'category___slug___current'
  | 'category___image____key'
  | 'category___image____type'
  | 'category___image___asset____id'
  | 'category___image___asset____type'
  | 'category___image___asset____createdAt'
  | 'category___image___asset____updatedAt'
  | 'category___image___asset____rev'
  | 'category___image___asset____key'
  | 'category___image___asset___originalFilename'
  | 'category___image___asset___label'
  | 'category___image___asset___title'
  | 'category___image___asset___description'
  | 'category___image___asset___altText'
  | 'category___image___asset___sha1hash'
  | 'category___image___asset___extension'
  | 'category___image___asset___mimeType'
  | 'category___image___asset___size'
  | 'category___image___asset___assetId'
  | 'category___image___asset___uploadId'
  | 'category___image___asset___path'
  | 'category___image___asset___url'
  | 'category___image___asset____rawMetadata'
  | 'category___image___asset____rawSource'
  | 'category___image___asset___gatsbyImageData'
  | 'category___image___asset___id'
  | 'category___image___asset___children'
  | 'category___image___hotspot____key'
  | 'category___image___hotspot____type'
  | 'category___image___hotspot___x'
  | 'category___image___hotspot___y'
  | 'category___image___hotspot___height'
  | 'category___image___hotspot___width'
  | 'category___image___crop____key'
  | 'category___image___crop____type'
  | 'category___image___crop___top'
  | 'category___image___crop___bottom'
  | 'category___image___crop___left'
  | 'category___image___crop___right'
  | 'category___image___alt'
  | 'category___image____rawAsset'
  | 'category___image____rawHotspot'
  | 'category___image____rawCrop'
  | 'category____rawSlug'
  | 'category____rawImage'
  | 'category___gatsbyPath'
  | 'category___id'
  | 'category___parent___id'
  | 'category___parent___parent___id'
  | 'category___parent___parent___children'
  | 'category___parent___children'
  | 'category___parent___children___id'
  | 'category___parent___children___children'
  | 'category___parent___internal___content'
  | 'category___parent___internal___contentDigest'
  | 'category___parent___internal___description'
  | 'category___parent___internal___fieldOwners'
  | 'category___parent___internal___ignoreType'
  | 'category___parent___internal___mediaType'
  | 'category___parent___internal___owner'
  | 'category___parent___internal___type'
  | 'category___children'
  | 'category___children___id'
  | 'category___children___parent___id'
  | 'category___children___parent___children'
  | 'category___children___children'
  | 'category___children___children___id'
  | 'category___children___children___children'
  | 'category___children___internal___content'
  | 'category___children___internal___contentDigest'
  | 'category___children___internal___description'
  | 'category___children___internal___fieldOwners'
  | 'category___children___internal___ignoreType'
  | 'category___children___internal___mediaType'
  | 'category___children___internal___owner'
  | 'category___children___internal___type'
  | 'category___internal___content'
  | 'category___internal___contentDigest'
  | 'category___internal___description'
  | 'category___internal___fieldOwners'
  | 'category___internal___ignoreType'
  | 'category___internal___mediaType'
  | 'category___internal___owner'
  | 'category___internal___type'
  | 'new'
  | 'price'
  | 'description'
  | 'includes'
  | 'includes____key'
  | 'includes____type'
  | 'includes___name'
  | 'includes___quantity'
  | 'gallery'
  | 'gallery____key'
  | 'gallery____type'
  | 'gallery___mobile____key'
  | 'gallery___mobile____type'
  | 'gallery___mobile___asset____id'
  | 'gallery___mobile___asset____type'
  | 'gallery___mobile___asset____createdAt'
  | 'gallery___mobile___asset____updatedAt'
  | 'gallery___mobile___asset____rev'
  | 'gallery___mobile___asset____key'
  | 'gallery___mobile___asset___originalFilename'
  | 'gallery___mobile___asset___label'
  | 'gallery___mobile___asset___title'
  | 'gallery___mobile___asset___description'
  | 'gallery___mobile___asset___altText'
  | 'gallery___mobile___asset___sha1hash'
  | 'gallery___mobile___asset___extension'
  | 'gallery___mobile___asset___mimeType'
  | 'gallery___mobile___asset___size'
  | 'gallery___mobile___asset___assetId'
  | 'gallery___mobile___asset___uploadId'
  | 'gallery___mobile___asset___path'
  | 'gallery___mobile___asset___url'
  | 'gallery___mobile___asset____rawMetadata'
  | 'gallery___mobile___asset____rawSource'
  | 'gallery___mobile___asset___gatsbyImageData'
  | 'gallery___mobile___asset___id'
  | 'gallery___mobile___asset___children'
  | 'gallery___mobile___hotspot____key'
  | 'gallery___mobile___hotspot____type'
  | 'gallery___mobile___hotspot___x'
  | 'gallery___mobile___hotspot___y'
  | 'gallery___mobile___hotspot___height'
  | 'gallery___mobile___hotspot___width'
  | 'gallery___mobile___crop____key'
  | 'gallery___mobile___crop____type'
  | 'gallery___mobile___crop___top'
  | 'gallery___mobile___crop___bottom'
  | 'gallery___mobile___crop___left'
  | 'gallery___mobile___crop___right'
  | 'gallery___mobile___alt'
  | 'gallery___mobile____rawAsset'
  | 'gallery___mobile____rawHotspot'
  | 'gallery___mobile____rawCrop'
  | 'gallery___tablet____key'
  | 'gallery___tablet____type'
  | 'gallery___tablet___asset____id'
  | 'gallery___tablet___asset____type'
  | 'gallery___tablet___asset____createdAt'
  | 'gallery___tablet___asset____updatedAt'
  | 'gallery___tablet___asset____rev'
  | 'gallery___tablet___asset____key'
  | 'gallery___tablet___asset___originalFilename'
  | 'gallery___tablet___asset___label'
  | 'gallery___tablet___asset___title'
  | 'gallery___tablet___asset___description'
  | 'gallery___tablet___asset___altText'
  | 'gallery___tablet___asset___sha1hash'
  | 'gallery___tablet___asset___extension'
  | 'gallery___tablet___asset___mimeType'
  | 'gallery___tablet___asset___size'
  | 'gallery___tablet___asset___assetId'
  | 'gallery___tablet___asset___uploadId'
  | 'gallery___tablet___asset___path'
  | 'gallery___tablet___asset___url'
  | 'gallery___tablet___asset____rawMetadata'
  | 'gallery___tablet___asset____rawSource'
  | 'gallery___tablet___asset___gatsbyImageData'
  | 'gallery___tablet___asset___id'
  | 'gallery___tablet___asset___children'
  | 'gallery___tablet___hotspot____key'
  | 'gallery___tablet___hotspot____type'
  | 'gallery___tablet___hotspot___x'
  | 'gallery___tablet___hotspot___y'
  | 'gallery___tablet___hotspot___height'
  | 'gallery___tablet___hotspot___width'
  | 'gallery___tablet___crop____key'
  | 'gallery___tablet___crop____type'
  | 'gallery___tablet___crop___top'
  | 'gallery___tablet___crop___bottom'
  | 'gallery___tablet___crop___left'
  | 'gallery___tablet___crop___right'
  | 'gallery___tablet___alt'
  | 'gallery___tablet____rawAsset'
  | 'gallery___tablet____rawHotspot'
  | 'gallery___tablet____rawCrop'
  | 'gallery___desktop____key'
  | 'gallery___desktop____type'
  | 'gallery___desktop___asset____id'
  | 'gallery___desktop___asset____type'
  | 'gallery___desktop___asset____createdAt'
  | 'gallery___desktop___asset____updatedAt'
  | 'gallery___desktop___asset____rev'
  | 'gallery___desktop___asset____key'
  | 'gallery___desktop___asset___originalFilename'
  | 'gallery___desktop___asset___label'
  | 'gallery___desktop___asset___title'
  | 'gallery___desktop___asset___description'
  | 'gallery___desktop___asset___altText'
  | 'gallery___desktop___asset___sha1hash'
  | 'gallery___desktop___asset___extension'
  | 'gallery___desktop___asset___mimeType'
  | 'gallery___desktop___asset___size'
  | 'gallery___desktop___asset___assetId'
  | 'gallery___desktop___asset___uploadId'
  | 'gallery___desktop___asset___path'
  | 'gallery___desktop___asset___url'
  | 'gallery___desktop___asset____rawMetadata'
  | 'gallery___desktop___asset____rawSource'
  | 'gallery___desktop___asset___gatsbyImageData'
  | 'gallery___desktop___asset___id'
  | 'gallery___desktop___asset___children'
  | 'gallery___desktop___hotspot____key'
  | 'gallery___desktop___hotspot____type'
  | 'gallery___desktop___hotspot___x'
  | 'gallery___desktop___hotspot___y'
  | 'gallery___desktop___hotspot___height'
  | 'gallery___desktop___hotspot___width'
  | 'gallery___desktop___crop____key'
  | 'gallery___desktop___crop____type'
  | 'gallery___desktop___crop___top'
  | 'gallery___desktop___crop___bottom'
  | 'gallery___desktop___crop___left'
  | 'gallery___desktop___crop___right'
  | 'gallery___desktop___alt'
  | 'gallery___desktop____rawAsset'
  | 'gallery___desktop____rawHotspot'
  | 'gallery___desktop____rawCrop'
  | 'gallery____rawMobile'
  | 'gallery____rawTablet'
  | 'gallery____rawDesktop'
  | 'related'
  | 'related____id'
  | 'related____type'
  | 'related____createdAt'
  | 'related____updatedAt'
  | 'related____rev'
  | 'related____key'
  | 'related___orderRank'
  | 'related___name'
  | 'related___shortName'
  | 'related___slug____key'
  | 'related___slug____type'
  | 'related___slug___current'
  | 'related___image____key'
  | 'related___image____type'
  | 'related___image___asset____id'
  | 'related___image___asset____type'
  | 'related___image___asset____createdAt'
  | 'related___image___asset____updatedAt'
  | 'related___image___asset____rev'
  | 'related___image___asset____key'
  | 'related___image___asset___originalFilename'
  | 'related___image___asset___label'
  | 'related___image___asset___title'
  | 'related___image___asset___description'
  | 'related___image___asset___altText'
  | 'related___image___asset___sha1hash'
  | 'related___image___asset___extension'
  | 'related___image___asset___mimeType'
  | 'related___image___asset___size'
  | 'related___image___asset___assetId'
  | 'related___image___asset___uploadId'
  | 'related___image___asset___path'
  | 'related___image___asset___url'
  | 'related___image___asset____rawMetadata'
  | 'related___image___asset____rawSource'
  | 'related___image___asset___gatsbyImageData'
  | 'related___image___asset___id'
  | 'related___image___asset___children'
  | 'related___image___hotspot____key'
  | 'related___image___hotspot____type'
  | 'related___image___hotspot___x'
  | 'related___image___hotspot___y'
  | 'related___image___hotspot___height'
  | 'related___image___hotspot___width'
  | 'related___image___crop____key'
  | 'related___image___crop____type'
  | 'related___image___crop___top'
  | 'related___image___crop___bottom'
  | 'related___image___crop___left'
  | 'related___image___crop___right'
  | 'related___image___alt'
  | 'related___image____rawAsset'
  | 'related___image____rawHotspot'
  | 'related___image____rawCrop'
  | 'related___heroImages____key'
  | 'related___heroImages____type'
  | 'related___heroImages___mobile____key'
  | 'related___heroImages___mobile____type'
  | 'related___heroImages___mobile___alt'
  | 'related___heroImages___mobile____rawAsset'
  | 'related___heroImages___mobile____rawHotspot'
  | 'related___heroImages___mobile____rawCrop'
  | 'related___heroImages___tablet____key'
  | 'related___heroImages___tablet____type'
  | 'related___heroImages___tablet___alt'
  | 'related___heroImages___tablet____rawAsset'
  | 'related___heroImages___tablet____rawHotspot'
  | 'related___heroImages___tablet____rawCrop'
  | 'related___heroImages___desktop____key'
  | 'related___heroImages___desktop____type'
  | 'related___heroImages___desktop___alt'
  | 'related___heroImages___desktop____rawAsset'
  | 'related___heroImages___desktop____rawHotspot'
  | 'related___heroImages___desktop____rawCrop'
  | 'related___heroImages____rawMobile'
  | 'related___heroImages____rawTablet'
  | 'related___heroImages____rawDesktop'
  | 'related___productImages____key'
  | 'related___productImages____type'
  | 'related___productImages___mobile____key'
  | 'related___productImages___mobile____type'
  | 'related___productImages___mobile___alt'
  | 'related___productImages___mobile____rawAsset'
  | 'related___productImages___mobile____rawHotspot'
  | 'related___productImages___mobile____rawCrop'
  | 'related___productImages___tablet____key'
  | 'related___productImages___tablet____type'
  | 'related___productImages___tablet___alt'
  | 'related___productImages___tablet____rawAsset'
  | 'related___productImages___tablet____rawHotspot'
  | 'related___productImages___tablet____rawCrop'
  | 'related___productImages___desktop____key'
  | 'related___productImages___desktop____type'
  | 'related___productImages___desktop___alt'
  | 'related___productImages___desktop____rawAsset'
  | 'related___productImages___desktop____rawHotspot'
  | 'related___productImages___desktop____rawCrop'
  | 'related___productImages____rawMobile'
  | 'related___productImages____rawTablet'
  | 'related___productImages____rawDesktop'
  | 'related___previewImages____key'
  | 'related___previewImages____type'
  | 'related___previewImages___mobile____key'
  | 'related___previewImages___mobile____type'
  | 'related___previewImages___mobile___alt'
  | 'related___previewImages___mobile____rawAsset'
  | 'related___previewImages___mobile____rawHotspot'
  | 'related___previewImages___mobile____rawCrop'
  | 'related___previewImages___tablet____key'
  | 'related___previewImages___tablet____type'
  | 'related___previewImages___tablet___alt'
  | 'related___previewImages___tablet____rawAsset'
  | 'related___previewImages___tablet____rawHotspot'
  | 'related___previewImages___tablet____rawCrop'
  | 'related___previewImages___desktop____key'
  | 'related___previewImages___desktop____type'
  | 'related___previewImages___desktop___alt'
  | 'related___previewImages___desktop____rawAsset'
  | 'related___previewImages___desktop____rawHotspot'
  | 'related___previewImages___desktop____rawCrop'
  | 'related___previewImages____rawMobile'
  | 'related___previewImages____rawTablet'
  | 'related___previewImages____rawDesktop'
  | 'related___featured'
  | 'related___featuredImages____key'
  | 'related___featuredImages____type'
  | 'related___featuredImages___mobile____key'
  | 'related___featuredImages___mobile____type'
  | 'related___featuredImages___mobile___alt'
  | 'related___featuredImages___mobile____rawAsset'
  | 'related___featuredImages___mobile____rawHotspot'
  | 'related___featuredImages___mobile____rawCrop'
  | 'related___featuredImages___tablet____key'
  | 'related___featuredImages___tablet____type'
  | 'related___featuredImages___tablet___alt'
  | 'related___featuredImages___tablet____rawAsset'
  | 'related___featuredImages___tablet____rawHotspot'
  | 'related___featuredImages___tablet____rawCrop'
  | 'related___featuredImages___desktop____key'
  | 'related___featuredImages___desktop____type'
  | 'related___featuredImages___desktop___alt'
  | 'related___featuredImages___desktop____rawAsset'
  | 'related___featuredImages___desktop____rawHotspot'
  | 'related___featuredImages___desktop____rawCrop'
  | 'related___featuredImages____rawMobile'
  | 'related___featuredImages____rawTablet'
  | 'related___featuredImages____rawDesktop'
  | 'related___category____id'
  | 'related___category____type'
  | 'related___category____createdAt'
  | 'related___category____updatedAt'
  | 'related___category____rev'
  | 'related___category____key'
  | 'related___category___orderRank'
  | 'related___category___name'
  | 'related___category___slug____key'
  | 'related___category___slug____type'
  | 'related___category___slug___current'
  | 'related___category___image____key'
  | 'related___category___image____type'
  | 'related___category___image___alt'
  | 'related___category___image____rawAsset'
  | 'related___category___image____rawHotspot'
  | 'related___category___image____rawCrop'
  | 'related___category____rawSlug'
  | 'related___category____rawImage'
  | 'related___category___gatsbyPath'
  | 'related___category___id'
  | 'related___category___parent___id'
  | 'related___category___parent___children'
  | 'related___category___children'
  | 'related___category___children___id'
  | 'related___category___children___children'
  | 'related___category___internal___content'
  | 'related___category___internal___contentDigest'
  | 'related___category___internal___description'
  | 'related___category___internal___fieldOwners'
  | 'related___category___internal___ignoreType'
  | 'related___category___internal___mediaType'
  | 'related___category___internal___owner'
  | 'related___category___internal___type'
  | 'related___new'
  | 'related___price'
  | 'related___description'
  | 'related___includes'
  | 'related___includes____key'
  | 'related___includes____type'
  | 'related___includes___name'
  | 'related___includes___quantity'
  | 'related___gallery'
  | 'related___gallery____key'
  | 'related___gallery____type'
  | 'related___gallery___mobile____key'
  | 'related___gallery___mobile____type'
  | 'related___gallery___mobile___alt'
  | 'related___gallery___mobile____rawAsset'
  | 'related___gallery___mobile____rawHotspot'
  | 'related___gallery___mobile____rawCrop'
  | 'related___gallery___tablet____key'
  | 'related___gallery___tablet____type'
  | 'related___gallery___tablet___alt'
  | 'related___gallery___tablet____rawAsset'
  | 'related___gallery___tablet____rawHotspot'
  | 'related___gallery___tablet____rawCrop'
  | 'related___gallery___desktop____key'
  | 'related___gallery___desktop____type'
  | 'related___gallery___desktop___alt'
  | 'related___gallery___desktop____rawAsset'
  | 'related___gallery___desktop____rawHotspot'
  | 'related___gallery___desktop____rawCrop'
  | 'related___gallery____rawMobile'
  | 'related___gallery____rawTablet'
  | 'related___gallery____rawDesktop'
  | 'related___related'
  | 'related___related____id'
  | 'related___related____type'
  | 'related___related____createdAt'
  | 'related___related____updatedAt'
  | 'related___related____rev'
  | 'related___related____key'
  | 'related___related___orderRank'
  | 'related___related___name'
  | 'related___related___shortName'
  | 'related___related___slug____key'
  | 'related___related___slug____type'
  | 'related___related___slug___current'
  | 'related___related___image____key'
  | 'related___related___image____type'
  | 'related___related___image___alt'
  | 'related___related___image____rawAsset'
  | 'related___related___image____rawHotspot'
  | 'related___related___image____rawCrop'
  | 'related___related___heroImages____key'
  | 'related___related___heroImages____type'
  | 'related___related___heroImages____rawMobile'
  | 'related___related___heroImages____rawTablet'
  | 'related___related___heroImages____rawDesktop'
  | 'related___related___productImages____key'
  | 'related___related___productImages____type'
  | 'related___related___productImages____rawMobile'
  | 'related___related___productImages____rawTablet'
  | 'related___related___productImages____rawDesktop'
  | 'related___related___previewImages____key'
  | 'related___related___previewImages____type'
  | 'related___related___previewImages____rawMobile'
  | 'related___related___previewImages____rawTablet'
  | 'related___related___previewImages____rawDesktop'
  | 'related___related___featured'
  | 'related___related___featuredImages____key'
  | 'related___related___featuredImages____type'
  | 'related___related___featuredImages____rawMobile'
  | 'related___related___featuredImages____rawTablet'
  | 'related___related___featuredImages____rawDesktop'
  | 'related___related___category____id'
  | 'related___related___category____type'
  | 'related___related___category____createdAt'
  | 'related___related___category____updatedAt'
  | 'related___related___category____rev'
  | 'related___related___category____key'
  | 'related___related___category___orderRank'
  | 'related___related___category___name'
  | 'related___related___category____rawSlug'
  | 'related___related___category____rawImage'
  | 'related___related___category___gatsbyPath'
  | 'related___related___category___id'
  | 'related___related___category___children'
  | 'related___related___new'
  | 'related___related___price'
  | 'related___related___description'
  | 'related___related___includes'
  | 'related___related___includes____key'
  | 'related___related___includes____type'
  | 'related___related___includes___name'
  | 'related___related___includes___quantity'
  | 'related___related___gallery'
  | 'related___related___gallery____key'
  | 'related___related___gallery____type'
  | 'related___related___gallery____rawMobile'
  | 'related___related___gallery____rawTablet'
  | 'related___related___gallery____rawDesktop'
  | 'related___related___related'
  | 'related___related___related____id'
  | 'related___related___related____type'
  | 'related___related___related____createdAt'
  | 'related___related___related____updatedAt'
  | 'related___related___related____rev'
  | 'related___related___related____key'
  | 'related___related___related___orderRank'
  | 'related___related___related___name'
  | 'related___related___related___shortName'
  | 'related___related___related___featured'
  | 'related___related___related___new'
  | 'related___related___related___price'
  | 'related___related___related___description'
  | 'related___related___related___includes'
  | 'related___related___related___gallery'
  | 'related___related___related___related'
  | 'related___related___related___features'
  | 'related___related___related____rawSlug'
  | 'related___related___related____rawImage'
  | 'related___related___related____rawHeroImages'
  | 'related___related___related____rawProductImages'
  | 'related___related___related____rawPreviewImages'
  | 'related___related___related____rawFeaturedImages'
  | 'related___related___related____rawCategory'
  | 'related___related___related____rawFeatures'
  | 'related___related___related____rawIncludes'
  | 'related___related___related____rawGallery'
  | 'related___related___related____rawRelated'
  | 'related___related___related___gatsbyPath'
  | 'related___related___related___id'
  | 'related___related___related___children'
  | 'related___related___features'
  | 'related___related___features____key'
  | 'related___related___features____type'
  | 'related___related___features___children'
  | 'related___related___features___style'
  | 'related___related___features___list'
  | 'related___related___features____rawChildren'
  | 'related___related____rawSlug'
  | 'related___related____rawImage'
  | 'related___related____rawHeroImages'
  | 'related___related____rawProductImages'
  | 'related___related____rawPreviewImages'
  | 'related___related____rawFeaturedImages'
  | 'related___related____rawCategory'
  | 'related___related____rawFeatures'
  | 'related___related____rawIncludes'
  | 'related___related____rawGallery'
  | 'related___related____rawRelated'
  | 'related___related___gatsbyPath'
  | 'related___related___id'
  | 'related___related___parent___id'
  | 'related___related___parent___children'
  | 'related___related___children'
  | 'related___related___children___id'
  | 'related___related___children___children'
  | 'related___related___internal___content'
  | 'related___related___internal___contentDigest'
  | 'related___related___internal___description'
  | 'related___related___internal___fieldOwners'
  | 'related___related___internal___ignoreType'
  | 'related___related___internal___mediaType'
  | 'related___related___internal___owner'
  | 'related___related___internal___type'
  | 'related___features'
  | 'related___features____key'
  | 'related___features____type'
  | 'related___features___children'
  | 'related___features___children____key'
  | 'related___features___children____type'
  | 'related___features___children___marks'
  | 'related___features___children___text'
  | 'related___features___style'
  | 'related___features___list'
  | 'related___features____rawChildren'
  | 'related____rawSlug'
  | 'related____rawImage'
  | 'related____rawHeroImages'
  | 'related____rawProductImages'
  | 'related____rawPreviewImages'
  | 'related____rawFeaturedImages'
  | 'related____rawCategory'
  | 'related____rawFeatures'
  | 'related____rawIncludes'
  | 'related____rawGallery'
  | 'related____rawRelated'
  | 'related___gatsbyPath'
  | 'related___id'
  | 'related___parent___id'
  | 'related___parent___parent___id'
  | 'related___parent___parent___children'
  | 'related___parent___children'
  | 'related___parent___children___id'
  | 'related___parent___children___children'
  | 'related___parent___internal___content'
  | 'related___parent___internal___contentDigest'
  | 'related___parent___internal___description'
  | 'related___parent___internal___fieldOwners'
  | 'related___parent___internal___ignoreType'
  | 'related___parent___internal___mediaType'
  | 'related___parent___internal___owner'
  | 'related___parent___internal___type'
  | 'related___children'
  | 'related___children___id'
  | 'related___children___parent___id'
  | 'related___children___parent___children'
  | 'related___children___children'
  | 'related___children___children___id'
  | 'related___children___children___children'
  | 'related___children___internal___content'
  | 'related___children___internal___contentDigest'
  | 'related___children___internal___description'
  | 'related___children___internal___fieldOwners'
  | 'related___children___internal___ignoreType'
  | 'related___children___internal___mediaType'
  | 'related___children___internal___owner'
  | 'related___children___internal___type'
  | 'related___internal___content'
  | 'related___internal___contentDigest'
  | 'related___internal___description'
  | 'related___internal___fieldOwners'
  | 'related___internal___ignoreType'
  | 'related___internal___mediaType'
  | 'related___internal___owner'
  | 'related___internal___type'
  | 'features'
  | 'features____key'
  | 'features____type'
  | 'features___children'
  | 'features___children____key'
  | 'features___children____type'
  | 'features___children___marks'
  | 'features___children___text'
  | 'features___style'
  | 'features___list'
  | 'features____rawChildren'
  | '_rawSlug'
  | '_rawImage'
  | '_rawHeroImages'
  | '_rawProductImages'
  | '_rawPreviewImages'
  | '_rawFeaturedImages'
  | '_rawCategory'
  | '_rawFeatures'
  | '_rawIncludes'
  | '_rawGallery'
  | '_rawRelated'
  | 'gatsbyPath'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SanityProductGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SanityProductEdge>;
  nodes: Array<SanityProduct>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  sum: Maybe<Scalars['Float']>;
  group: Array<SanityProductGroupConnection>;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
};


export type SanityProductGroupConnectionDistinctArgs = {
  field: SanityProductFieldsEnum;
};


export type SanityProductGroupConnectionMaxArgs = {
  field: SanityProductFieldsEnum;
};


export type SanityProductGroupConnectionMinArgs = {
  field: SanityProductFieldsEnum;
};


export type SanityProductGroupConnectionSumArgs = {
  field: SanityProductFieldsEnum;
};


export type SanityProductGroupConnectionGroupArgs = {
  skip: InputMaybe<Scalars['Int']>;
  limit: InputMaybe<Scalars['Int']>;
  field: SanityProductFieldsEnum;
};

export type SanityProductSortInput = {
  fields: InputMaybe<Array<InputMaybe<SanityProductFieldsEnum>>>;
  order: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SanityFileAssetConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SanityFileAssetEdge>;
  nodes: Array<SanityFileAsset>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  sum: Maybe<Scalars['Float']>;
  group: Array<SanityFileAssetGroupConnection>;
};


export type SanityFileAssetConnectionDistinctArgs = {
  field: SanityFileAssetFieldsEnum;
};


export type SanityFileAssetConnectionMaxArgs = {
  field: SanityFileAssetFieldsEnum;
};


export type SanityFileAssetConnectionMinArgs = {
  field: SanityFileAssetFieldsEnum;
};


export type SanityFileAssetConnectionSumArgs = {
  field: SanityFileAssetFieldsEnum;
};


export type SanityFileAssetConnectionGroupArgs = {
  skip: InputMaybe<Scalars['Int']>;
  limit: InputMaybe<Scalars['Int']>;
  field: SanityFileAssetFieldsEnum;
};

export type SanityFileAssetEdge = {
  next: Maybe<SanityFileAsset>;
  node: SanityFileAsset;
  previous: Maybe<SanityFileAsset>;
};

export type SanityFileAssetFieldsEnum =
  | '_id'
  | '_type'
  | '_createdAt'
  | '_updatedAt'
  | '_rev'
  | '_key'
  | 'originalFilename'
  | 'label'
  | 'title'
  | 'description'
  | 'altText'
  | 'sha1hash'
  | 'extension'
  | 'mimeType'
  | 'size'
  | 'assetId'
  | 'path'
  | 'url'
  | 'source____key'
  | 'source____type'
  | 'source___name'
  | 'source___id'
  | 'source___url'
  | '_rawSource'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SanityFileAssetGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SanityFileAssetEdge>;
  nodes: Array<SanityFileAsset>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  sum: Maybe<Scalars['Float']>;
  group: Array<SanityFileAssetGroupConnection>;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
};


export type SanityFileAssetGroupConnectionDistinctArgs = {
  field: SanityFileAssetFieldsEnum;
};


export type SanityFileAssetGroupConnectionMaxArgs = {
  field: SanityFileAssetFieldsEnum;
};


export type SanityFileAssetGroupConnectionMinArgs = {
  field: SanityFileAssetFieldsEnum;
};


export type SanityFileAssetGroupConnectionSumArgs = {
  field: SanityFileAssetFieldsEnum;
};


export type SanityFileAssetGroupConnectionGroupArgs = {
  skip: InputMaybe<Scalars['Int']>;
  limit: InputMaybe<Scalars['Int']>;
  field: SanityFileAssetFieldsEnum;
};

export type SanityFileAssetFilterInput = {
  _id: InputMaybe<StringQueryOperatorInput>;
  _type: InputMaybe<StringQueryOperatorInput>;
  _createdAt: InputMaybe<DateQueryOperatorInput>;
  _updatedAt: InputMaybe<DateQueryOperatorInput>;
  _rev: InputMaybe<StringQueryOperatorInput>;
  _key: InputMaybe<StringQueryOperatorInput>;
  originalFilename: InputMaybe<StringQueryOperatorInput>;
  label: InputMaybe<StringQueryOperatorInput>;
  title: InputMaybe<StringQueryOperatorInput>;
  description: InputMaybe<StringQueryOperatorInput>;
  altText: InputMaybe<StringQueryOperatorInput>;
  sha1hash: InputMaybe<StringQueryOperatorInput>;
  extension: InputMaybe<StringQueryOperatorInput>;
  mimeType: InputMaybe<StringQueryOperatorInput>;
  size: InputMaybe<FloatQueryOperatorInput>;
  assetId: InputMaybe<StringQueryOperatorInput>;
  path: InputMaybe<StringQueryOperatorInput>;
  url: InputMaybe<StringQueryOperatorInput>;
  source: InputMaybe<SanityAssetSourceDataFilterInput>;
  _rawSource: InputMaybe<JsonQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  children: InputMaybe<NodeFilterListInput>;
  internal: InputMaybe<InternalFilterInput>;
};

export type SanityFileAssetSortInput = {
  fields: InputMaybe<Array<InputMaybe<SanityFileAssetFieldsEnum>>>;
  order: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SanityImageAssetConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SanityImageAssetEdge>;
  nodes: Array<SanityImageAsset>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  sum: Maybe<Scalars['Float']>;
  group: Array<SanityImageAssetGroupConnection>;
};


export type SanityImageAssetConnectionDistinctArgs = {
  field: SanityImageAssetFieldsEnum;
};


export type SanityImageAssetConnectionMaxArgs = {
  field: SanityImageAssetFieldsEnum;
};


export type SanityImageAssetConnectionMinArgs = {
  field: SanityImageAssetFieldsEnum;
};


export type SanityImageAssetConnectionSumArgs = {
  field: SanityImageAssetFieldsEnum;
};


export type SanityImageAssetConnectionGroupArgs = {
  skip: InputMaybe<Scalars['Int']>;
  limit: InputMaybe<Scalars['Int']>;
  field: SanityImageAssetFieldsEnum;
};

export type SanityImageAssetEdge = {
  next: Maybe<SanityImageAsset>;
  node: SanityImageAsset;
  previous: Maybe<SanityImageAsset>;
};

export type SanityImageAssetFieldsEnum =
  | '_id'
  | '_type'
  | '_createdAt'
  | '_updatedAt'
  | '_rev'
  | '_key'
  | 'originalFilename'
  | 'label'
  | 'title'
  | 'description'
  | 'altText'
  | 'sha1hash'
  | 'extension'
  | 'mimeType'
  | 'size'
  | 'assetId'
  | 'uploadId'
  | 'path'
  | 'url'
  | 'metadata____key'
  | 'metadata____type'
  | 'metadata___location____key'
  | 'metadata___location____type'
  | 'metadata___location___lat'
  | 'metadata___location___lng'
  | 'metadata___location___alt'
  | 'metadata___dimensions____key'
  | 'metadata___dimensions____type'
  | 'metadata___dimensions___height'
  | 'metadata___dimensions___width'
  | 'metadata___dimensions___aspectRatio'
  | 'metadata___palette____key'
  | 'metadata___palette____type'
  | 'metadata___palette___darkMuted____key'
  | 'metadata___palette___darkMuted____type'
  | 'metadata___palette___darkMuted___background'
  | 'metadata___palette___darkMuted___foreground'
  | 'metadata___palette___darkMuted___population'
  | 'metadata___palette___darkMuted___title'
  | 'metadata___palette___lightVibrant____key'
  | 'metadata___palette___lightVibrant____type'
  | 'metadata___palette___lightVibrant___background'
  | 'metadata___palette___lightVibrant___foreground'
  | 'metadata___palette___lightVibrant___population'
  | 'metadata___palette___lightVibrant___title'
  | 'metadata___palette___darkVibrant____key'
  | 'metadata___palette___darkVibrant____type'
  | 'metadata___palette___darkVibrant___background'
  | 'metadata___palette___darkVibrant___foreground'
  | 'metadata___palette___darkVibrant___population'
  | 'metadata___palette___darkVibrant___title'
  | 'metadata___palette___vibrant____key'
  | 'metadata___palette___vibrant____type'
  | 'metadata___palette___vibrant___background'
  | 'metadata___palette___vibrant___foreground'
  | 'metadata___palette___vibrant___population'
  | 'metadata___palette___vibrant___title'
  | 'metadata___palette___dominant____key'
  | 'metadata___palette___dominant____type'
  | 'metadata___palette___dominant___background'
  | 'metadata___palette___dominant___foreground'
  | 'metadata___palette___dominant___population'
  | 'metadata___palette___dominant___title'
  | 'metadata___palette___lightMuted____key'
  | 'metadata___palette___lightMuted____type'
  | 'metadata___palette___lightMuted___background'
  | 'metadata___palette___lightMuted___foreground'
  | 'metadata___palette___lightMuted___population'
  | 'metadata___palette___lightMuted___title'
  | 'metadata___palette___muted____key'
  | 'metadata___palette___muted____type'
  | 'metadata___palette___muted___background'
  | 'metadata___palette___muted___foreground'
  | 'metadata___palette___muted___population'
  | 'metadata___palette___muted___title'
  | 'metadata___palette____rawDarkMuted'
  | 'metadata___palette____rawLightVibrant'
  | 'metadata___palette____rawDarkVibrant'
  | 'metadata___palette____rawVibrant'
  | 'metadata___palette____rawDominant'
  | 'metadata___palette____rawLightMuted'
  | 'metadata___palette____rawMuted'
  | 'metadata___lqip'
  | 'metadata___blurHash'
  | 'metadata___hasAlpha'
  | 'metadata___isOpaque'
  | 'metadata____rawLocation'
  | 'metadata____rawDimensions'
  | 'metadata____rawPalette'
  | 'source____key'
  | 'source____type'
  | 'source___name'
  | 'source___id'
  | 'source___url'
  | '_rawMetadata'
  | '_rawSource'
  | 'gatsbyImageData'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SanityImageAssetGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SanityImageAssetEdge>;
  nodes: Array<SanityImageAsset>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  sum: Maybe<Scalars['Float']>;
  group: Array<SanityImageAssetGroupConnection>;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
};


export type SanityImageAssetGroupConnectionDistinctArgs = {
  field: SanityImageAssetFieldsEnum;
};


export type SanityImageAssetGroupConnectionMaxArgs = {
  field: SanityImageAssetFieldsEnum;
};


export type SanityImageAssetGroupConnectionMinArgs = {
  field: SanityImageAssetFieldsEnum;
};


export type SanityImageAssetGroupConnectionSumArgs = {
  field: SanityImageAssetFieldsEnum;
};


export type SanityImageAssetGroupConnectionGroupArgs = {
  skip: InputMaybe<Scalars['Int']>;
  limit: InputMaybe<Scalars['Int']>;
  field: SanityImageAssetFieldsEnum;
};

export type SanityImageAssetSortInput = {
  fields: InputMaybe<Array<InputMaybe<SanityImageAssetFieldsEnum>>>;
  order: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type ImageSharpConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  sum: Maybe<Scalars['Float']>;
  group: Array<ImageSharpGroupConnection>;
};


export type ImageSharpConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionMaxArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionMinArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionSumArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionGroupArgs = {
  skip: InputMaybe<Scalars['Int']>;
  limit: InputMaybe<Scalars['Int']>;
  field: ImageSharpFieldsEnum;
};

export type ImageSharpEdge = {
  next: Maybe<ImageSharp>;
  node: ImageSharp;
  previous: Maybe<ImageSharp>;
};

export type ImageSharpFieldsEnum =
  | 'fixed___base64'
  | 'fixed___tracedSVG'
  | 'fixed___aspectRatio'
  | 'fixed___width'
  | 'fixed___height'
  | 'fixed___src'
  | 'fixed___srcSet'
  | 'fixed___srcWebp'
  | 'fixed___srcSetWebp'
  | 'fixed___originalName'
  | 'fluid___base64'
  | 'fluid___tracedSVG'
  | 'fluid___aspectRatio'
  | 'fluid___src'
  | 'fluid___srcSet'
  | 'fluid___srcWebp'
  | 'fluid___srcSetWebp'
  | 'fluid___sizes'
  | 'fluid___originalImg'
  | 'fluid___originalName'
  | 'fluid___presentationWidth'
  | 'fluid___presentationHeight'
  | 'gatsbyImageData'
  | 'original___width'
  | 'original___height'
  | 'original___src'
  | 'resize___src'
  | 'resize___tracedSVG'
  | 'resize___width'
  | 'resize___height'
  | 'resize___aspectRatio'
  | 'resize___originalName'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type ImageSharpGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  sum: Maybe<Scalars['Float']>;
  group: Array<ImageSharpGroupConnection>;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
};


export type ImageSharpGroupConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpGroupConnectionMaxArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpGroupConnectionMinArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpGroupConnectionSumArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpGroupConnectionGroupArgs = {
  skip: InputMaybe<Scalars['Int']>;
  limit: InputMaybe<Scalars['Int']>;
  field: ImageSharpFieldsEnum;
};

export type ImageSharpSortInput = {
  fields: InputMaybe<Array<InputMaybe<ImageSharpFieldsEnum>>>;
  order: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type ImageDataFragment = { alt: string, asset: { gatsbyImageData: any } };

export type AboutSectionQueryVariables = Exact<{ [key: string]: never; }>;


export type AboutSectionQuery = { sanityGlobalData: { aboutSection: { _rawTitle: any, text: string, images: { desktop: { alt: string, asset: { gatsbyImageData: any } }, mobile: { alt: string, asset: { gatsbyImageData: any } }, tablet: { alt: string, asset: { gatsbyImageData: any } } } } } };

export type FeaturedProductsSectionQueryVariables = Exact<{ [key: string]: never; }>;


export type FeaturedProductsSectionQuery = { allSanityProduct: { nodes: Array<{ shortName: string, slug: { current: string }, featuredImages: { desktop: { alt: string, asset: { gatsbyImageData: any } }, mobile: { alt: string, asset: { gatsbyImageData: any } }, tablet: { alt: string, asset: { gatsbyImageData: any } } } }> } };

export type FooterDataQueryVariables = Exact<{ [key: string]: never; }>;


export type FooterDataQuery = { sanityGlobalData: { footerCopy: string, logo: { asset: { url: string } } }, allSanityCategory: { nodes: Array<{ id: string, name: string, slug: { current: string } }> } };

export type HomePageHeroQueryVariables = Exact<{ [key: string]: never; }>;


export type HomePageHeroQuery = { sanityProduct: { name: string, new: boolean, slug: { current: string }, heroImages: { desktop: { alt: string, asset: { gatsbyImageData: any } }, mobile: { alt: string, asset: { gatsbyImageData: any } }, tablet: { alt: string, asset: { gatsbyImageData: any } } } } };

export type DesktopMenuQueryVariables = Exact<{ [key: string]: never; }>;


export type DesktopMenuQuery = { allSanityCategory: { nodes: Array<{ id: string, name: string, slug: { current: string } }> } };

export type MobileMenuQueryVariables = Exact<{ [key: string]: never; }>;


export type MobileMenuQuery = { allSanityCategory: { nodes: Array<{ id: string, name: string, slug: { current: string }, image: { alt: string, asset: { gatsbyImageData: any } } }> } };

export type CategoryPageQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type CategoryPageQuery = { sanityCategory: { name: string }, allSanityProduct: { nodes: Array<{ id: string, name: string, new: boolean, description: string, previewImages: { mobile: { alt: string, asset: { gatsbyImageData: any } }, tablet: { alt: string, asset: { gatsbyImageData: any } }, desktop: { alt: string, asset: { gatsbyImageData: any } } }, slug: { current: string } }> } };

export type ProductPageQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type ProductPageQuery = { sanityProduct: { name: string, new: boolean, description: string, price: number, productImages: { mobile: { alt: string, asset: { gatsbyImageData: any } }, tablet: { alt: string, asset: { gatsbyImageData: any } }, desktop: { alt: string, asset: { gatsbyImageData: any } } }, features: Array<{ _rawChildren: any }>, includes: Array<{ name: string, quantity: number }>, gallery: Array<{ mobile: { alt: string, asset: { gatsbyImageData: any } }, tablet: { alt: string, asset: { gatsbyImageData: any } }, desktop: { alt: string, asset: { gatsbyImageData: any } } }>, related: Array<{ id: string, name: string, slug: { current: string } }> } };

export type GatsbyImageSharpFixedFragment = { base64: string, width: number, height: number, src: string, srcSet: string };

export type GatsbyImageSharpFixed_TracedSvgFragment = { tracedSVG: string, width: number, height: number, src: string, srcSet: string };

export type GatsbyImageSharpFixed_WithWebpFragment = { base64: string, width: number, height: number, src: string, srcSet: string, srcWebp: string, srcSetWebp: string };

export type GatsbyImageSharpFixed_WithWebp_TracedSvgFragment = { tracedSVG: string, width: number, height: number, src: string, srcSet: string, srcWebp: string, srcSetWebp: string };

export type GatsbyImageSharpFixed_NoBase64Fragment = { width: number, height: number, src: string, srcSet: string };

export type GatsbyImageSharpFixed_WithWebp_NoBase64Fragment = { width: number, height: number, src: string, srcSet: string, srcWebp: string, srcSetWebp: string };

export type GatsbyImageSharpFluidFragment = { base64: string, aspectRatio: number, src: string, srcSet: string, sizes: string };

export type GatsbyImageSharpFluidLimitPresentationSizeFragment = { maxHeight: number, maxWidth: number };

export type GatsbyImageSharpFluid_TracedSvgFragment = { tracedSVG: string, aspectRatio: number, src: string, srcSet: string, sizes: string };

export type GatsbyImageSharpFluid_WithWebpFragment = { base64: string, aspectRatio: number, src: string, srcSet: string, srcWebp: string, srcSetWebp: string, sizes: string };

export type GatsbyImageSharpFluid_WithWebp_TracedSvgFragment = { tracedSVG: string, aspectRatio: number, src: string, srcSet: string, srcWebp: string, srcSetWebp: string, sizes: string };

export type GatsbyImageSharpFluid_NoBase64Fragment = { aspectRatio: number, src: string, srcSet: string, sizes: string };

export type GatsbyImageSharpFluid_WithWebp_NoBase64Fragment = { aspectRatio: number, src: string, srcSet: string, srcWebp: string, srcSetWebp: string, sizes: string };
