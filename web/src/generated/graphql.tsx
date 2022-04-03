import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type BurgerInput = {
  foodCategory: Scalars['String'];
  foodDescription: Scalars['String'];
  foodImageUrl: Scalars['String'];
  foodName: Scalars['String'];
  foodPrice: Scalars['Float'];
  foodReviewStar: Scalars['Float'];
};

export type DesertInput = {
  foodCategory: Scalars['String'];
  foodDescription: Scalars['String'];
  foodImageUrl: Scalars['String'];
  foodName: Scalars['String'];
  foodPrice: Scalars['Float'];
  foodReviewStar: Scalars['Float'];
};

export type FieldError = {
  __typename?: 'FieldError';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type Food = {
  __typename?: 'Food';
  createdAt: Scalars['String'];
  foodCategory: Scalars['String'];
  foodDescription: Scalars['String'];
  foodImageUrl: Scalars['String'];
  foodName: Scalars['String'];
  foodPrice: Scalars['Float'];
  foodReviewStar: Scalars['Float'];
  id: Scalars['Float'];
  updatedAt: Scalars['String'];
};

export type FoodInput = {
  foodCategory: Scalars['String'];
  foodDescription: Scalars['String'];
  foodImageUrl: Scalars['String'];
  foodName: Scalars['String'];
  foodPrice: Scalars['Float'];
  foodReviewStar: Scalars['Float'];
};

export type JuiceInput = {
  foodCategory: Scalars['String'];
  foodDescription: Scalars['String'];
  foodImageUrl: Scalars['String'];
  foodName: Scalars['String'];
  foodPrice: Scalars['Float'];
  foodReviewStar: Scalars['Float'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addBurgerImage: Scalars['Boolean'];
  addDesertImage: Scalars['Boolean'];
  addFoodImage: Scalars['Boolean'];
  addJuiceImage: Scalars['Boolean'];
  addNoodlesImage: Scalars['Boolean'];
  addPizzaImage: Scalars['Boolean'];
  createBurger: Food;
  createDesert: Food;
  createFood: Food;
  createJuice: Food;
  createNoodles: Food;
  createPizza: Food;
  deleteFood: Scalars['Boolean'];
  login: UserResponse;
  logout: Scalars['Boolean'];
  register: UserResponse;
  updateFoodCategory?: Maybe<Food>;
  updateFoodDescription?: Maybe<Food>;
  updateFoodImageUrl?: Maybe<Food>;
  updateFoodPrice?: Maybe<Food>;
};


export type MutationAddBurgerImageArgs = {
  picture: Scalars['Upload'];
};


export type MutationAddDesertImageArgs = {
  picture: Scalars['Upload'];
};


export type MutationAddFoodImageArgs = {
  picture: Scalars['Upload'];
};


export type MutationAddJuiceImageArgs = {
  picture: Scalars['Upload'];
};


export type MutationAddNoodlesImageArgs = {
  picture: Scalars['Upload'];
};


export type MutationAddPizzaImageArgs = {
  picture: Scalars['Upload'];
};


export type MutationCreateBurgerArgs = {
  input: BurgerInput;
};


export type MutationCreateDesertArgs = {
  input: DesertInput;
};


export type MutationCreateFoodArgs = {
  input: FoodInput;
};


export type MutationCreateJuiceArgs = {
  input: JuiceInput;
};


export type MutationCreateNoodlesArgs = {
  input: NoodlesInput;
};


export type MutationCreatePizzaArgs = {
  input: PizzaInput;
};


export type MutationDeleteFoodArgs = {
  id: Scalars['Float'];
};


export type MutationLoginArgs = {
  options: UsernamePasswordInput;
};


export type MutationRegisterArgs = {
  options: UsernamePasswordInput;
};


export type MutationUpdateFoodCategoryArgs = {
  foodCategory?: InputMaybe<Scalars['String']>;
  id: Scalars['Float'];
};


export type MutationUpdateFoodDescriptionArgs = {
  foodDescription?: InputMaybe<Scalars['String']>;
  id: Scalars['Float'];
};


export type MutationUpdateFoodImageUrlArgs = {
  foodImageUrl?: InputMaybe<Scalars['String']>;
  id: Scalars['Float'];
};


export type MutationUpdateFoodPriceArgs = {
  foodCategory?: InputMaybe<Scalars['String']>;
  id: Scalars['Float'];
};

export type NoodlesInput = {
  foodCategory: Scalars['String'];
  foodDescription: Scalars['String'];
  foodImageUrl: Scalars['String'];
  foodName: Scalars['String'];
  foodPrice: Scalars['Float'];
  foodReviewStar: Scalars['Float'];
};

export type PizzaInput = {
  foodCategory: Scalars['String'];
  foodDescription: Scalars['String'];
  foodImageUrl: Scalars['String'];
  foodName: Scalars['String'];
  foodPrice: Scalars['Float'];
  foodReviewStar: Scalars['Float'];
};

export type Query = {
  __typename?: 'Query';
  Burger: Array<Food>;
  Desert: Array<Food>;
  Juice: Array<Food>;
  Pizza: Array<Food>;
  food?: Maybe<Food>;
  foodType?: Maybe<Array<Food>>;
  foods: Array<Food>;
  hello: Scalars['String'];
  me?: Maybe<User>;
  noodles: Array<Food>;
  singleBurger?: Maybe<Food>;
  singleDesert?: Maybe<Food>;
  singleJuice?: Maybe<Food>;
  singlePizza?: Maybe<Food>;
  singlenoodles?: Maybe<Food>;
};


export type QueryFoodArgs = {
  id: Scalars['Float'];
};


export type QueryFoodTypeArgs = {
  foodCategory: Scalars['String'];
};


export type QuerySingleBurgerArgs = {
  id: Scalars['Float'];
};


export type QuerySingleDesertArgs = {
  id: Scalars['Float'];
};


export type QuerySingleJuiceArgs = {
  id: Scalars['Float'];
};


export type QuerySinglePizzaArgs = {
  id: Scalars['Float'];
};


export type QuerySinglenoodlesArgs = {
  id: Scalars['Float'];
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['String'];
  id: Scalars['Float'];
  updatedAt: Scalars['String'];
  username: Scalars['String'];
};

export type UserResponse = {
  __typename?: 'UserResponse';
  errors?: Maybe<Array<FieldError>>;
  user?: Maybe<User>;
};

export type UsernamePasswordInput = {
  password: Scalars['String'];
  username: Scalars['String'];
};

export type RegularUserFragment = { __typename?: 'User', id: number, username: string };

export type RegularFoodFragment = { __typename?: 'Food', id: number, createdAt: string, updatedAt: string, foodName: string, foodDescription: string, foodReviewStar: number, foodImageUrl: string, foodCategory: string, foodPrice: number };

export type CreateFoodMutationVariables = Exact<{
  options: FoodInput;
}>;


export type CreateFoodMutation = { __typename?: 'Mutation', createFood: { __typename?: 'Food', id: number, createdAt: string, foodName: string, foodDescription: string, foodReviewStar: number, foodImageUrl: string, foodCategory: string, foodPrice: number } };

export type LoginMutationVariables = Exact<{
  options: UsernamePasswordInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'UserResponse', errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null, user?: { __typename?: 'User', id: number, username: string } | null } };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'Mutation', logout: boolean };

export type RegisterMutationVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
}>;


export type RegisterMutation = { __typename?: 'Mutation', register: { __typename?: 'UserResponse', errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null, user?: { __typename?: 'User', id: number, username: string } | null } };

export type AddFoodImageMutationVariables = Exact<{
  picture: Scalars['Upload'];
}>;


export type AddFoodImageMutation = { __typename?: 'Mutation', addFoodImage: boolean };

export type FoodQueryVariables = Exact<{
  id: Scalars['Float'];
}>;


export type FoodQuery = { __typename?: 'Query', food?: { __typename?: 'Food', id: number, foodName: string, foodDescription: string, foodReviewStar: number, foodImageUrl: string, foodCategory: string, foodPrice: number } | null };

export type FoodsQueryVariables = Exact<{ [key: string]: never; }>;


export type FoodsQuery = { __typename?: 'Query', foods: Array<{ __typename?: 'Food', id: number, foodName: string, foodDescription: string, foodReviewStar: number, foodImageUrl: string, foodCategory: string, foodPrice: number }> };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me?: { __typename?: 'User', id: number, username: string } | null };

export const RegularUserFragmentDoc = gql`
    fragment RegularUser on User {
  id
  username
}
    `;
export const RegularFoodFragmentDoc = gql`
    fragment RegularFood on Food {
  id
  createdAt
  updatedAt
  foodName
  foodDescription
  foodReviewStar
  foodImageUrl
  foodCategory
  foodPrice
}
    `;
export const CreateFoodDocument = gql`
    mutation CreateFood($options: FoodInput!) {
  createFood(input: $options) {
    id
    createdAt
    foodName
    foodDescription
    foodReviewStar
    foodImageUrl
    foodCategory
    foodPrice
  }
}
    `;

export function useCreateFoodMutation() {
  return Urql.useMutation<CreateFoodMutation, CreateFoodMutationVariables>(CreateFoodDocument);
};
export const LoginDocument = gql`
    mutation Login($options: UsernamePasswordInput!) {
  login(options: $options) {
    errors {
      field
      message
    }
    user {
      ...RegularUser
    }
  }
}
    ${RegularUserFragmentDoc}`;

export function useLoginMutation() {
  return Urql.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument);
};
export const LogoutDocument = gql`
    mutation Logout {
  logout
}
    `;

export function useLogoutMutation() {
  return Urql.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument);
};
export const RegisterDocument = gql`
    mutation Register($username: String!, $password: String!) {
  register(options: {username: $username, password: $password}) {
    errors {
      field
      message
    }
    user {
      ...RegularUser
    }
  }
}
    ${RegularUserFragmentDoc}`;

export function useRegisterMutation() {
  return Urql.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument);
};
export const AddFoodImageDocument = gql`
    mutation AddFoodImage($picture: Upload!) {
  addFoodImage(picture: $picture)
}
    `;

export function useAddFoodImageMutation() {
  return Urql.useMutation<AddFoodImageMutation, AddFoodImageMutationVariables>(AddFoodImageDocument);
};
export const FoodDocument = gql`
    query Food($id: Float!) {
  food(id: $id) {
    id
    foodName
    foodDescription
    foodReviewStar
    foodReviewStar
    foodImageUrl
    foodCategory
    foodPrice
  }
}
    `;

export function useFoodQuery(options: Omit<Urql.UseQueryArgs<FoodQueryVariables>, 'query'>) {
  return Urql.useQuery<FoodQuery>({ query: FoodDocument, ...options });
};
export const FoodsDocument = gql`
    query Foods {
  foods {
    id
    foodName
    foodDescription
    foodReviewStar
    foodImageUrl
    foodCategory
    foodPrice
  }
}
    `;

export function useFoodsQuery(options?: Omit<Urql.UseQueryArgs<FoodsQueryVariables>, 'query'>) {
  return Urql.useQuery<FoodsQuery>({ query: FoodsDocument, ...options });
};
export const MeDocument = gql`
    query Me {
  me {
    id
    username
  }
}
    `;

export function useMeQuery(options?: Omit<Urql.UseQueryArgs<MeQueryVariables>, 'query'>) {
  return Urql.useQuery<MeQuery>({ query: MeDocument, ...options });
};