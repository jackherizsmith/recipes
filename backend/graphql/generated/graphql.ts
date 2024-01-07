import { GraphQLClient } from 'graphql-request';
import { GraphQLClientRequestHeaders } from 'graphql-request/build/cjs/types';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']['input']>;
  _gt?: InputMaybe<Scalars['Int']['input']>;
  _gte?: InputMaybe<Scalars['Int']['input']>;
  _in?: InputMaybe<Array<Scalars['Int']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Int']['input']>;
  _lte?: InputMaybe<Scalars['Int']['input']>;
  _neq?: InputMaybe<Scalars['Int']['input']>;
  _nin?: InputMaybe<Array<Scalars['Int']['input']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']['input']>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']['input']>;
};

/** ordering argument of a cursor */
export type Cursor_Ordering =
  /** ascending ordering of the cursor */
  | 'ASC'
  /** descending ordering of the cursor */
  | 'DESC';

/** columns and relationships of "ingredients" */
export type Ingredients = {
  __typename?: 'ingredients';
  ingredient: Scalars['String']['output'];
  /** An array relationship */
  recipe_ingredients: Array<Recipe_Ingredients>;
  /** An aggregate relationship */
  recipe_ingredients_aggregate: Recipe_Ingredients_Aggregate;
  unit: Units_Enum;
};

/** columns and relationships of "ingredients" */
export type IngredientsRecipe_IngredientsArgs = {
  distinct_on?: InputMaybe<Array<Recipe_Ingredients_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Recipe_Ingredients_Order_By>>;
  where?: InputMaybe<Recipe_Ingredients_Bool_Exp>;
};

/** columns and relationships of "ingredients" */
export type IngredientsRecipe_Ingredients_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Recipe_Ingredients_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Recipe_Ingredients_Order_By>>;
  where?: InputMaybe<Recipe_Ingredients_Bool_Exp>;
};

/** aggregated selection of "ingredients" */
export type Ingredients_Aggregate = {
  __typename?: 'ingredients_aggregate';
  aggregate: Maybe<Ingredients_Aggregate_Fields>;
  nodes: Array<Ingredients>;
};

export type Ingredients_Aggregate_Bool_Exp = {
  count?: InputMaybe<Ingredients_Aggregate_Bool_Exp_Count>;
};

export type Ingredients_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Ingredients_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Ingredients_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "ingredients" */
export type Ingredients_Aggregate_Fields = {
  __typename?: 'ingredients_aggregate_fields';
  count: Scalars['Int']['output'];
  max: Maybe<Ingredients_Max_Fields>;
  min: Maybe<Ingredients_Min_Fields>;
};

/** aggregate fields of "ingredients" */
export type Ingredients_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Ingredients_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "ingredients" */
export type Ingredients_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Ingredients_Max_Order_By>;
  min?: InputMaybe<Ingredients_Min_Order_By>;
};

/** input type for inserting array relation for remote table "ingredients" */
export type Ingredients_Arr_Rel_Insert_Input = {
  data: Array<Ingredients_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Ingredients_On_Conflict>;
};

/** Boolean expression to filter rows from the table "ingredients". All fields are combined with a logical 'AND'. */
export type Ingredients_Bool_Exp = {
  _and?: InputMaybe<Array<Ingredients_Bool_Exp>>;
  _not?: InputMaybe<Ingredients_Bool_Exp>;
  _or?: InputMaybe<Array<Ingredients_Bool_Exp>>;
  ingredient?: InputMaybe<String_Comparison_Exp>;
  recipe_ingredients?: InputMaybe<Recipe_Ingredients_Bool_Exp>;
  recipe_ingredients_aggregate?: InputMaybe<Recipe_Ingredients_Aggregate_Bool_Exp>;
  unit?: InputMaybe<Units_Enum_Comparison_Exp>;
};

/** unique or primary key constraints on table "ingredients" */
export type Ingredients_Constraint =
  /** unique or primary key constraint on columns "ingredient" */
  'ingredients_pkey';

/** input type for inserting data into table "ingredients" */
export type Ingredients_Insert_Input = {
  ingredient?: InputMaybe<Scalars['String']['input']>;
  recipe_ingredients?: InputMaybe<Recipe_Ingredients_Arr_Rel_Insert_Input>;
  unit?: InputMaybe<Units_Enum>;
};

/** aggregate max on columns */
export type Ingredients_Max_Fields = {
  __typename?: 'ingredients_max_fields';
  ingredient: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "ingredients" */
export type Ingredients_Max_Order_By = {
  ingredient?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Ingredients_Min_Fields = {
  __typename?: 'ingredients_min_fields';
  ingredient: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "ingredients" */
export type Ingredients_Min_Order_By = {
  ingredient?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "ingredients" */
export type Ingredients_Mutation_Response = {
  __typename?: 'ingredients_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Ingredients>;
};

/** input type for inserting object relation for remote table "ingredients" */
export type Ingredients_Obj_Rel_Insert_Input = {
  data: Ingredients_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Ingredients_On_Conflict>;
};

/** on_conflict condition type for table "ingredients" */
export type Ingredients_On_Conflict = {
  constraint: Ingredients_Constraint;
  update_columns?: Array<Ingredients_Update_Column>;
  where?: InputMaybe<Ingredients_Bool_Exp>;
};

/** Ordering options when selecting data from "ingredients". */
export type Ingredients_Order_By = {
  ingredient?: InputMaybe<Order_By>;
  recipe_ingredients_aggregate?: InputMaybe<Recipe_Ingredients_Aggregate_Order_By>;
  unit?: InputMaybe<Order_By>;
};

/** primary key columns input for table: ingredients */
export type Ingredients_Pk_Columns_Input = {
  ingredient: Scalars['String']['input'];
};

/** select columns of table "ingredients" */
export type Ingredients_Select_Column =
  /** column name */
  | 'ingredient'
  /** column name */
  | 'unit';

/** input type for updating data in table "ingredients" */
export type Ingredients_Set_Input = {
  ingredient?: InputMaybe<Scalars['String']['input']>;
  unit?: InputMaybe<Units_Enum>;
};

/** Streaming cursor of the table "ingredients" */
export type Ingredients_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Ingredients_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Ingredients_Stream_Cursor_Value_Input = {
  ingredient?: InputMaybe<Scalars['String']['input']>;
  unit?: InputMaybe<Units_Enum>;
};

/** update columns of table "ingredients" */
export type Ingredients_Update_Column =
  /** column name */
  | 'ingredient'
  /** column name */
  | 'unit';

export type Ingredients_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Ingredients_Set_Input>;
  /** filter the rows which have to be updated */
  where: Ingredients_Bool_Exp;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "ingredients" */
  delete_ingredients: Maybe<Ingredients_Mutation_Response>;
  /** delete single row from the table: "ingredients" */
  delete_ingredients_by_pk: Maybe<Ingredients>;
  /** delete data from the table: "order_recipes" */
  delete_order_recipes: Maybe<Order_Recipes_Mutation_Response>;
  /** delete single row from the table: "order_recipes" */
  delete_order_recipes_by_pk: Maybe<Order_Recipes>;
  /** delete data from the table: "orders" */
  delete_orders: Maybe<Orders_Mutation_Response>;
  /** delete single row from the table: "orders" */
  delete_orders_by_pk: Maybe<Orders>;
  /** delete data from the table: "recipe_ingredients" */
  delete_recipe_ingredients: Maybe<Recipe_Ingredients_Mutation_Response>;
  /** delete single row from the table: "recipe_ingredients" */
  delete_recipe_ingredients_by_pk: Maybe<Recipe_Ingredients>;
  /** delete data from the table: "recipes" */
  delete_recipes: Maybe<Recipes_Mutation_Response>;
  /** delete single row from the table: "recipes" */
  delete_recipes_by_pk: Maybe<Recipes>;
  /** delete data from the table: "units" */
  delete_units: Maybe<Units_Mutation_Response>;
  /** delete single row from the table: "units" */
  delete_units_by_pk: Maybe<Units>;
  /** insert data into the table: "ingredients" */
  insert_ingredients: Maybe<Ingredients_Mutation_Response>;
  /** insert a single row into the table: "ingredients" */
  insert_ingredients_one: Maybe<Ingredients>;
  /** insert data into the table: "order_recipes" */
  insert_order_recipes: Maybe<Order_Recipes_Mutation_Response>;
  /** insert a single row into the table: "order_recipes" */
  insert_order_recipes_one: Maybe<Order_Recipes>;
  /** insert data into the table: "orders" */
  insert_orders: Maybe<Orders_Mutation_Response>;
  /** insert a single row into the table: "orders" */
  insert_orders_one: Maybe<Orders>;
  /** insert data into the table: "recipe_ingredients" */
  insert_recipe_ingredients: Maybe<Recipe_Ingredients_Mutation_Response>;
  /** insert a single row into the table: "recipe_ingredients" */
  insert_recipe_ingredients_one: Maybe<Recipe_Ingredients>;
  /** insert data into the table: "recipes" */
  insert_recipes: Maybe<Recipes_Mutation_Response>;
  /** insert a single row into the table: "recipes" */
  insert_recipes_one: Maybe<Recipes>;
  /** insert data into the table: "units" */
  insert_units: Maybe<Units_Mutation_Response>;
  /** insert a single row into the table: "units" */
  insert_units_one: Maybe<Units>;
  /** update data of the table: "ingredients" */
  update_ingredients: Maybe<Ingredients_Mutation_Response>;
  /** update single row of the table: "ingredients" */
  update_ingredients_by_pk: Maybe<Ingredients>;
  /** update multiples rows of table: "ingredients" */
  update_ingredients_many: Maybe<Array<Maybe<Ingredients_Mutation_Response>>>;
  /** update data of the table: "order_recipes" */
  update_order_recipes: Maybe<Order_Recipes_Mutation_Response>;
  /** update single row of the table: "order_recipes" */
  update_order_recipes_by_pk: Maybe<Order_Recipes>;
  /** update multiples rows of table: "order_recipes" */
  update_order_recipes_many: Maybe<Array<Maybe<Order_Recipes_Mutation_Response>>>;
  /** update data of the table: "orders" */
  update_orders: Maybe<Orders_Mutation_Response>;
  /** update single row of the table: "orders" */
  update_orders_by_pk: Maybe<Orders>;
  /** update multiples rows of table: "orders" */
  update_orders_many: Maybe<Array<Maybe<Orders_Mutation_Response>>>;
  /** update data of the table: "recipe_ingredients" */
  update_recipe_ingredients: Maybe<Recipe_Ingredients_Mutation_Response>;
  /** update single row of the table: "recipe_ingredients" */
  update_recipe_ingredients_by_pk: Maybe<Recipe_Ingredients>;
  /** update multiples rows of table: "recipe_ingredients" */
  update_recipe_ingredients_many: Maybe<Array<Maybe<Recipe_Ingredients_Mutation_Response>>>;
  /** update data of the table: "recipes" */
  update_recipes: Maybe<Recipes_Mutation_Response>;
  /** update single row of the table: "recipes" */
  update_recipes_by_pk: Maybe<Recipes>;
  /** update multiples rows of table: "recipes" */
  update_recipes_many: Maybe<Array<Maybe<Recipes_Mutation_Response>>>;
  /** update data of the table: "units" */
  update_units: Maybe<Units_Mutation_Response>;
  /** update single row of the table: "units" */
  update_units_by_pk: Maybe<Units>;
  /** update multiples rows of table: "units" */
  update_units_many: Maybe<Array<Maybe<Units_Mutation_Response>>>;
};

/** mutation root */
export type Mutation_RootDelete_IngredientsArgs = {
  where: Ingredients_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Ingredients_By_PkArgs = {
  ingredient: Scalars['String']['input'];
};

/** mutation root */
export type Mutation_RootDelete_Order_RecipesArgs = {
  where: Order_Recipes_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Order_Recipes_By_PkArgs = {
  order_id: Scalars['Int']['input'];
  recipe_id: Scalars['Int']['input'];
};

/** mutation root */
export type Mutation_RootDelete_OrdersArgs = {
  where: Orders_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Orders_By_PkArgs = {
  id: Scalars['Int']['input'];
};

/** mutation root */
export type Mutation_RootDelete_Recipe_IngredientsArgs = {
  where: Recipe_Ingredients_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Recipe_Ingredients_By_PkArgs = {
  id: Scalars['Int']['input'];
};

/** mutation root */
export type Mutation_RootDelete_RecipesArgs = {
  where: Recipes_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Recipes_By_PkArgs = {
  id: Scalars['Int']['input'];
};

/** mutation root */
export type Mutation_RootDelete_UnitsArgs = {
  where: Units_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Units_By_PkArgs = {
  unit: Scalars['String']['input'];
};

/** mutation root */
export type Mutation_RootInsert_IngredientsArgs = {
  objects: Array<Ingredients_Insert_Input>;
  on_conflict?: InputMaybe<Ingredients_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Ingredients_OneArgs = {
  object: Ingredients_Insert_Input;
  on_conflict?: InputMaybe<Ingredients_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Order_RecipesArgs = {
  objects: Array<Order_Recipes_Insert_Input>;
  on_conflict?: InputMaybe<Order_Recipes_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Order_Recipes_OneArgs = {
  object: Order_Recipes_Insert_Input;
  on_conflict?: InputMaybe<Order_Recipes_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_OrdersArgs = {
  objects: Array<Orders_Insert_Input>;
  on_conflict?: InputMaybe<Orders_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Orders_OneArgs = {
  object: Orders_Insert_Input;
  on_conflict?: InputMaybe<Orders_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Recipe_IngredientsArgs = {
  objects: Array<Recipe_Ingredients_Insert_Input>;
  on_conflict?: InputMaybe<Recipe_Ingredients_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Recipe_Ingredients_OneArgs = {
  object: Recipe_Ingredients_Insert_Input;
  on_conflict?: InputMaybe<Recipe_Ingredients_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_RecipesArgs = {
  objects: Array<Recipes_Insert_Input>;
  on_conflict?: InputMaybe<Recipes_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Recipes_OneArgs = {
  object: Recipes_Insert_Input;
  on_conflict?: InputMaybe<Recipes_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_UnitsArgs = {
  objects: Array<Units_Insert_Input>;
  on_conflict?: InputMaybe<Units_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Units_OneArgs = {
  object: Units_Insert_Input;
  on_conflict?: InputMaybe<Units_On_Conflict>;
};

/** mutation root */
export type Mutation_RootUpdate_IngredientsArgs = {
  _set?: InputMaybe<Ingredients_Set_Input>;
  where: Ingredients_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Ingredients_By_PkArgs = {
  _set?: InputMaybe<Ingredients_Set_Input>;
  pk_columns: Ingredients_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Ingredients_ManyArgs = {
  updates: Array<Ingredients_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_Order_RecipesArgs = {
  _inc?: InputMaybe<Order_Recipes_Inc_Input>;
  _set?: InputMaybe<Order_Recipes_Set_Input>;
  where: Order_Recipes_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Order_Recipes_By_PkArgs = {
  _inc?: InputMaybe<Order_Recipes_Inc_Input>;
  _set?: InputMaybe<Order_Recipes_Set_Input>;
  pk_columns: Order_Recipes_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Order_Recipes_ManyArgs = {
  updates: Array<Order_Recipes_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_OrdersArgs = {
  _inc?: InputMaybe<Orders_Inc_Input>;
  _set?: InputMaybe<Orders_Set_Input>;
  where: Orders_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Orders_By_PkArgs = {
  _inc?: InputMaybe<Orders_Inc_Input>;
  _set?: InputMaybe<Orders_Set_Input>;
  pk_columns: Orders_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Orders_ManyArgs = {
  updates: Array<Orders_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_Recipe_IngredientsArgs = {
  _inc?: InputMaybe<Recipe_Ingredients_Inc_Input>;
  _set?: InputMaybe<Recipe_Ingredients_Set_Input>;
  where: Recipe_Ingredients_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Recipe_Ingredients_By_PkArgs = {
  _inc?: InputMaybe<Recipe_Ingredients_Inc_Input>;
  _set?: InputMaybe<Recipe_Ingredients_Set_Input>;
  pk_columns: Recipe_Ingredients_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Recipe_Ingredients_ManyArgs = {
  updates: Array<Recipe_Ingredients_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_RecipesArgs = {
  _inc?: InputMaybe<Recipes_Inc_Input>;
  _set?: InputMaybe<Recipes_Set_Input>;
  where: Recipes_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Recipes_By_PkArgs = {
  _inc?: InputMaybe<Recipes_Inc_Input>;
  _set?: InputMaybe<Recipes_Set_Input>;
  pk_columns: Recipes_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Recipes_ManyArgs = {
  updates: Array<Recipes_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_UnitsArgs = {
  _set?: InputMaybe<Units_Set_Input>;
  where: Units_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Units_By_PkArgs = {
  _set?: InputMaybe<Units_Set_Input>;
  pk_columns: Units_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Units_ManyArgs = {
  updates: Array<Units_Updates>;
};

/** column ordering options */
export type Order_By =
  /** in ascending order, nulls last */
  | 'asc'
  /** in ascending order, nulls first */
  | 'asc_nulls_first'
  /** in ascending order, nulls last */
  | 'asc_nulls_last'
  /** in descending order, nulls first */
  | 'desc'
  /** in descending order, nulls first */
  | 'desc_nulls_first'
  /** in descending order, nulls last */
  | 'desc_nulls_last';

/** columns and relationships of "order_recipes" */
export type Order_Recipes = {
  __typename?: 'order_recipes';
  order_id: Scalars['Int']['output'];
  recipe_id: Scalars['Int']['output'];
  servings_count: Scalars['Int']['output'];
};

/** aggregated selection of "order_recipes" */
export type Order_Recipes_Aggregate = {
  __typename?: 'order_recipes_aggregate';
  aggregate: Maybe<Order_Recipes_Aggregate_Fields>;
  nodes: Array<Order_Recipes>;
};

/** aggregate fields of "order_recipes" */
export type Order_Recipes_Aggregate_Fields = {
  __typename?: 'order_recipes_aggregate_fields';
  avg: Maybe<Order_Recipes_Avg_Fields>;
  count: Scalars['Int']['output'];
  max: Maybe<Order_Recipes_Max_Fields>;
  min: Maybe<Order_Recipes_Min_Fields>;
  stddev: Maybe<Order_Recipes_Stddev_Fields>;
  stddev_pop: Maybe<Order_Recipes_Stddev_Pop_Fields>;
  stddev_samp: Maybe<Order_Recipes_Stddev_Samp_Fields>;
  sum: Maybe<Order_Recipes_Sum_Fields>;
  var_pop: Maybe<Order_Recipes_Var_Pop_Fields>;
  var_samp: Maybe<Order_Recipes_Var_Samp_Fields>;
  variance: Maybe<Order_Recipes_Variance_Fields>;
};

/** aggregate fields of "order_recipes" */
export type Order_Recipes_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Order_Recipes_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Order_Recipes_Avg_Fields = {
  __typename?: 'order_recipes_avg_fields';
  order_id: Maybe<Scalars['Float']['output']>;
  recipe_id: Maybe<Scalars['Float']['output']>;
  servings_count: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "order_recipes". All fields are combined with a logical 'AND'. */
export type Order_Recipes_Bool_Exp = {
  _and?: InputMaybe<Array<Order_Recipes_Bool_Exp>>;
  _not?: InputMaybe<Order_Recipes_Bool_Exp>;
  _or?: InputMaybe<Array<Order_Recipes_Bool_Exp>>;
  order_id?: InputMaybe<Int_Comparison_Exp>;
  recipe_id?: InputMaybe<Int_Comparison_Exp>;
  servings_count?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "order_recipes" */
export type Order_Recipes_Constraint =
  /** unique or primary key constraint on columns "recipe_id", "order_id" */
  'order_recipes_pkey';

/** input type for incrementing numeric columns in table "order_recipes" */
export type Order_Recipes_Inc_Input = {
  order_id?: InputMaybe<Scalars['Int']['input']>;
  recipe_id?: InputMaybe<Scalars['Int']['input']>;
  servings_count?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "order_recipes" */
export type Order_Recipes_Insert_Input = {
  order_id?: InputMaybe<Scalars['Int']['input']>;
  recipe_id?: InputMaybe<Scalars['Int']['input']>;
  servings_count?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate max on columns */
export type Order_Recipes_Max_Fields = {
  __typename?: 'order_recipes_max_fields';
  order_id: Maybe<Scalars['Int']['output']>;
  recipe_id: Maybe<Scalars['Int']['output']>;
  servings_count: Maybe<Scalars['Int']['output']>;
};

/** aggregate min on columns */
export type Order_Recipes_Min_Fields = {
  __typename?: 'order_recipes_min_fields';
  order_id: Maybe<Scalars['Int']['output']>;
  recipe_id: Maybe<Scalars['Int']['output']>;
  servings_count: Maybe<Scalars['Int']['output']>;
};

/** response of any mutation on the table "order_recipes" */
export type Order_Recipes_Mutation_Response = {
  __typename?: 'order_recipes_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Order_Recipes>;
};

/** on_conflict condition type for table "order_recipes" */
export type Order_Recipes_On_Conflict = {
  constraint: Order_Recipes_Constraint;
  update_columns?: Array<Order_Recipes_Update_Column>;
  where?: InputMaybe<Order_Recipes_Bool_Exp>;
};

/** Ordering options when selecting data from "order_recipes". */
export type Order_Recipes_Order_By = {
  order_id?: InputMaybe<Order_By>;
  recipe_id?: InputMaybe<Order_By>;
  servings_count?: InputMaybe<Order_By>;
};

/** primary key columns input for table: order_recipes */
export type Order_Recipes_Pk_Columns_Input = {
  order_id: Scalars['Int']['input'];
  recipe_id: Scalars['Int']['input'];
};

/** select columns of table "order_recipes" */
export type Order_Recipes_Select_Column =
  /** column name */
  | 'order_id'
  /** column name */
  | 'recipe_id'
  /** column name */
  | 'servings_count';

/** input type for updating data in table "order_recipes" */
export type Order_Recipes_Set_Input = {
  order_id?: InputMaybe<Scalars['Int']['input']>;
  recipe_id?: InputMaybe<Scalars['Int']['input']>;
  servings_count?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate stddev on columns */
export type Order_Recipes_Stddev_Fields = {
  __typename?: 'order_recipes_stddev_fields';
  order_id: Maybe<Scalars['Float']['output']>;
  recipe_id: Maybe<Scalars['Float']['output']>;
  servings_count: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Order_Recipes_Stddev_Pop_Fields = {
  __typename?: 'order_recipes_stddev_pop_fields';
  order_id: Maybe<Scalars['Float']['output']>;
  recipe_id: Maybe<Scalars['Float']['output']>;
  servings_count: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Order_Recipes_Stddev_Samp_Fields = {
  __typename?: 'order_recipes_stddev_samp_fields';
  order_id: Maybe<Scalars['Float']['output']>;
  recipe_id: Maybe<Scalars['Float']['output']>;
  servings_count: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "order_recipes" */
export type Order_Recipes_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Order_Recipes_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Order_Recipes_Stream_Cursor_Value_Input = {
  order_id?: InputMaybe<Scalars['Int']['input']>;
  recipe_id?: InputMaybe<Scalars['Int']['input']>;
  servings_count?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type Order_Recipes_Sum_Fields = {
  __typename?: 'order_recipes_sum_fields';
  order_id: Maybe<Scalars['Int']['output']>;
  recipe_id: Maybe<Scalars['Int']['output']>;
  servings_count: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "order_recipes" */
export type Order_Recipes_Update_Column =
  /** column name */
  | 'order_id'
  /** column name */
  | 'recipe_id'
  /** column name */
  | 'servings_count';

export type Order_Recipes_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Order_Recipes_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Order_Recipes_Set_Input>;
  /** filter the rows which have to be updated */
  where: Order_Recipes_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Order_Recipes_Var_Pop_Fields = {
  __typename?: 'order_recipes_var_pop_fields';
  order_id: Maybe<Scalars['Float']['output']>;
  recipe_id: Maybe<Scalars['Float']['output']>;
  servings_count: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Order_Recipes_Var_Samp_Fields = {
  __typename?: 'order_recipes_var_samp_fields';
  order_id: Maybe<Scalars['Float']['output']>;
  recipe_id: Maybe<Scalars['Float']['output']>;
  servings_count: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Order_Recipes_Variance_Fields = {
  __typename?: 'order_recipes_variance_fields';
  order_id: Maybe<Scalars['Float']['output']>;
  recipe_id: Maybe<Scalars['Float']['output']>;
  servings_count: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "orders" */
export type Orders = {
  __typename?: 'orders';
  id: Scalars['Int']['output'];
};

/** aggregated selection of "orders" */
export type Orders_Aggregate = {
  __typename?: 'orders_aggregate';
  aggregate: Maybe<Orders_Aggregate_Fields>;
  nodes: Array<Orders>;
};

/** aggregate fields of "orders" */
export type Orders_Aggregate_Fields = {
  __typename?: 'orders_aggregate_fields';
  avg: Maybe<Orders_Avg_Fields>;
  count: Scalars['Int']['output'];
  max: Maybe<Orders_Max_Fields>;
  min: Maybe<Orders_Min_Fields>;
  stddev: Maybe<Orders_Stddev_Fields>;
  stddev_pop: Maybe<Orders_Stddev_Pop_Fields>;
  stddev_samp: Maybe<Orders_Stddev_Samp_Fields>;
  sum: Maybe<Orders_Sum_Fields>;
  var_pop: Maybe<Orders_Var_Pop_Fields>;
  var_samp: Maybe<Orders_Var_Samp_Fields>;
  variance: Maybe<Orders_Variance_Fields>;
};

/** aggregate fields of "orders" */
export type Orders_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Orders_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Orders_Avg_Fields = {
  __typename?: 'orders_avg_fields';
  id: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "orders". All fields are combined with a logical 'AND'. */
export type Orders_Bool_Exp = {
  _and?: InputMaybe<Array<Orders_Bool_Exp>>;
  _not?: InputMaybe<Orders_Bool_Exp>;
  _or?: InputMaybe<Array<Orders_Bool_Exp>>;
  id?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "orders" */
export type Orders_Constraint =
  /** unique or primary key constraint on columns "id" */
  'orders_pkey';

/** input type for incrementing numeric columns in table "orders" */
export type Orders_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "orders" */
export type Orders_Insert_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate max on columns */
export type Orders_Max_Fields = {
  __typename?: 'orders_max_fields';
  id: Maybe<Scalars['Int']['output']>;
};

/** aggregate min on columns */
export type Orders_Min_Fields = {
  __typename?: 'orders_min_fields';
  id: Maybe<Scalars['Int']['output']>;
};

/** response of any mutation on the table "orders" */
export type Orders_Mutation_Response = {
  __typename?: 'orders_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Orders>;
};

/** on_conflict condition type for table "orders" */
export type Orders_On_Conflict = {
  constraint: Orders_Constraint;
  update_columns?: Array<Orders_Update_Column>;
  where?: InputMaybe<Orders_Bool_Exp>;
};

/** Ordering options when selecting data from "orders". */
export type Orders_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: orders */
export type Orders_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "orders" */
export type Orders_Select_Column =
  /** column name */
  'id';

/** input type for updating data in table "orders" */
export type Orders_Set_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate stddev on columns */
export type Orders_Stddev_Fields = {
  __typename?: 'orders_stddev_fields';
  id: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Orders_Stddev_Pop_Fields = {
  __typename?: 'orders_stddev_pop_fields';
  id: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Orders_Stddev_Samp_Fields = {
  __typename?: 'orders_stddev_samp_fields';
  id: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "orders" */
export type Orders_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Orders_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Orders_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type Orders_Sum_Fields = {
  __typename?: 'orders_sum_fields';
  id: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "orders" */
export type Orders_Update_Column =
  /** column name */
  'id';

export type Orders_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Orders_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Orders_Set_Input>;
  /** filter the rows which have to be updated */
  where: Orders_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Orders_Var_Pop_Fields = {
  __typename?: 'orders_var_pop_fields';
  id: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Orders_Var_Samp_Fields = {
  __typename?: 'orders_var_samp_fields';
  id: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Orders_Variance_Fields = {
  __typename?: 'orders_variance_fields';
  id: Maybe<Scalars['Float']['output']>;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** An array relationship */
  ingredients: Array<Ingredients>;
  /** An aggregate relationship */
  ingredients_aggregate: Ingredients_Aggregate;
  /** fetch data from the table: "ingredients" using primary key columns */
  ingredients_by_pk: Maybe<Ingredients>;
  /** fetch data from the table: "order_recipes" */
  order_recipes: Array<Order_Recipes>;
  /** fetch aggregated fields from the table: "order_recipes" */
  order_recipes_aggregate: Order_Recipes_Aggregate;
  /** fetch data from the table: "order_recipes" using primary key columns */
  order_recipes_by_pk: Maybe<Order_Recipes>;
  /** fetch data from the table: "orders" */
  orders: Array<Orders>;
  /** fetch aggregated fields from the table: "orders" */
  orders_aggregate: Orders_Aggregate;
  /** fetch data from the table: "orders" using primary key columns */
  orders_by_pk: Maybe<Orders>;
  /** An array relationship */
  recipe_ingredients: Array<Recipe_Ingredients>;
  /** An aggregate relationship */
  recipe_ingredients_aggregate: Recipe_Ingredients_Aggregate;
  /** fetch data from the table: "recipe_ingredients" using primary key columns */
  recipe_ingredients_by_pk: Maybe<Recipe_Ingredients>;
  /** fetch data from the table: "recipes" */
  recipes: Array<Recipes>;
  /** fetch aggregated fields from the table: "recipes" */
  recipes_aggregate: Recipes_Aggregate;
  /** fetch data from the table: "recipes" using primary key columns */
  recipes_by_pk: Maybe<Recipes>;
  /** fetch data from the table: "units" */
  units: Array<Units>;
  /** fetch aggregated fields from the table: "units" */
  units_aggregate: Units_Aggregate;
  /** fetch data from the table: "units" using primary key columns */
  units_by_pk: Maybe<Units>;
};

export type Query_RootIngredientsArgs = {
  distinct_on?: InputMaybe<Array<Ingredients_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Ingredients_Order_By>>;
  where?: InputMaybe<Ingredients_Bool_Exp>;
};

export type Query_RootIngredients_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Ingredients_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Ingredients_Order_By>>;
  where?: InputMaybe<Ingredients_Bool_Exp>;
};

export type Query_RootIngredients_By_PkArgs = {
  ingredient: Scalars['String']['input'];
};

export type Query_RootOrder_RecipesArgs = {
  distinct_on?: InputMaybe<Array<Order_Recipes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Order_Recipes_Order_By>>;
  where?: InputMaybe<Order_Recipes_Bool_Exp>;
};

export type Query_RootOrder_Recipes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Order_Recipes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Order_Recipes_Order_By>>;
  where?: InputMaybe<Order_Recipes_Bool_Exp>;
};

export type Query_RootOrder_Recipes_By_PkArgs = {
  order_id: Scalars['Int']['input'];
  recipe_id: Scalars['Int']['input'];
};

export type Query_RootOrdersArgs = {
  distinct_on?: InputMaybe<Array<Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orders_Order_By>>;
  where?: InputMaybe<Orders_Bool_Exp>;
};

export type Query_RootOrders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orders_Order_By>>;
  where?: InputMaybe<Orders_Bool_Exp>;
};

export type Query_RootOrders_By_PkArgs = {
  id: Scalars['Int']['input'];
};

export type Query_RootRecipe_IngredientsArgs = {
  distinct_on?: InputMaybe<Array<Recipe_Ingredients_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Recipe_Ingredients_Order_By>>;
  where?: InputMaybe<Recipe_Ingredients_Bool_Exp>;
};

export type Query_RootRecipe_Ingredients_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Recipe_Ingredients_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Recipe_Ingredients_Order_By>>;
  where?: InputMaybe<Recipe_Ingredients_Bool_Exp>;
};

export type Query_RootRecipe_Ingredients_By_PkArgs = {
  id: Scalars['Int']['input'];
};

export type Query_RootRecipesArgs = {
  distinct_on?: InputMaybe<Array<Recipes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Recipes_Order_By>>;
  where?: InputMaybe<Recipes_Bool_Exp>;
};

export type Query_RootRecipes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Recipes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Recipes_Order_By>>;
  where?: InputMaybe<Recipes_Bool_Exp>;
};

export type Query_RootRecipes_By_PkArgs = {
  id: Scalars['Int']['input'];
};

export type Query_RootUnitsArgs = {
  distinct_on?: InputMaybe<Array<Units_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Units_Order_By>>;
  where?: InputMaybe<Units_Bool_Exp>;
};

export type Query_RootUnits_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Units_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Units_Order_By>>;
  where?: InputMaybe<Units_Bool_Exp>;
};

export type Query_RootUnits_By_PkArgs = {
  unit: Scalars['String']['input'];
};

/** columns and relationships of "recipe_ingredients" */
export type Recipe_Ingredients = {
  __typename?: 'recipe_ingredients';
  id: Scalars['Int']['output'];
  ingredient: Scalars['String']['output'];
  /** An object relationship */
  ingredientByIngredient: Ingredients;
  quantity: Scalars['Int']['output'];
  /** An object relationship */
  recipe: Recipes;
  recipe_id: Scalars['Int']['output'];
};

/** aggregated selection of "recipe_ingredients" */
export type Recipe_Ingredients_Aggregate = {
  __typename?: 'recipe_ingredients_aggregate';
  aggregate: Maybe<Recipe_Ingredients_Aggregate_Fields>;
  nodes: Array<Recipe_Ingredients>;
};

export type Recipe_Ingredients_Aggregate_Bool_Exp = {
  count?: InputMaybe<Recipe_Ingredients_Aggregate_Bool_Exp_Count>;
};

export type Recipe_Ingredients_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Recipe_Ingredients_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Recipe_Ingredients_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "recipe_ingredients" */
export type Recipe_Ingredients_Aggregate_Fields = {
  __typename?: 'recipe_ingredients_aggregate_fields';
  avg: Maybe<Recipe_Ingredients_Avg_Fields>;
  count: Scalars['Int']['output'];
  max: Maybe<Recipe_Ingredients_Max_Fields>;
  min: Maybe<Recipe_Ingredients_Min_Fields>;
  stddev: Maybe<Recipe_Ingredients_Stddev_Fields>;
  stddev_pop: Maybe<Recipe_Ingredients_Stddev_Pop_Fields>;
  stddev_samp: Maybe<Recipe_Ingredients_Stddev_Samp_Fields>;
  sum: Maybe<Recipe_Ingredients_Sum_Fields>;
  var_pop: Maybe<Recipe_Ingredients_Var_Pop_Fields>;
  var_samp: Maybe<Recipe_Ingredients_Var_Samp_Fields>;
  variance: Maybe<Recipe_Ingredients_Variance_Fields>;
};

/** aggregate fields of "recipe_ingredients" */
export type Recipe_Ingredients_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Recipe_Ingredients_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "recipe_ingredients" */
export type Recipe_Ingredients_Aggregate_Order_By = {
  avg?: InputMaybe<Recipe_Ingredients_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Recipe_Ingredients_Max_Order_By>;
  min?: InputMaybe<Recipe_Ingredients_Min_Order_By>;
  stddev?: InputMaybe<Recipe_Ingredients_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Recipe_Ingredients_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Recipe_Ingredients_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Recipe_Ingredients_Sum_Order_By>;
  var_pop?: InputMaybe<Recipe_Ingredients_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Recipe_Ingredients_Var_Samp_Order_By>;
  variance?: InputMaybe<Recipe_Ingredients_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "recipe_ingredients" */
export type Recipe_Ingredients_Arr_Rel_Insert_Input = {
  data: Array<Recipe_Ingredients_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Recipe_Ingredients_On_Conflict>;
};

/** aggregate avg on columns */
export type Recipe_Ingredients_Avg_Fields = {
  __typename?: 'recipe_ingredients_avg_fields';
  id: Maybe<Scalars['Float']['output']>;
  quantity: Maybe<Scalars['Float']['output']>;
  recipe_id: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "recipe_ingredients" */
export type Recipe_Ingredients_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
  recipe_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "recipe_ingredients". All fields are combined with a logical 'AND'. */
export type Recipe_Ingredients_Bool_Exp = {
  _and?: InputMaybe<Array<Recipe_Ingredients_Bool_Exp>>;
  _not?: InputMaybe<Recipe_Ingredients_Bool_Exp>;
  _or?: InputMaybe<Array<Recipe_Ingredients_Bool_Exp>>;
  id?: InputMaybe<Int_Comparison_Exp>;
  ingredient?: InputMaybe<String_Comparison_Exp>;
  ingredientByIngredient?: InputMaybe<Ingredients_Bool_Exp>;
  quantity?: InputMaybe<Int_Comparison_Exp>;
  recipe?: InputMaybe<Recipes_Bool_Exp>;
  recipe_id?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "recipe_ingredients" */
export type Recipe_Ingredients_Constraint =
  /** unique or primary key constraint on columns "id" */
  'recipe_ingredients_pkey';

/** input type for incrementing numeric columns in table "recipe_ingredients" */
export type Recipe_Ingredients_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
  recipe_id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "recipe_ingredients" */
export type Recipe_Ingredients_Insert_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  ingredient?: InputMaybe<Scalars['String']['input']>;
  ingredientByIngredient?: InputMaybe<Ingredients_Obj_Rel_Insert_Input>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
  recipe?: InputMaybe<Recipes_Obj_Rel_Insert_Input>;
  recipe_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate max on columns */
export type Recipe_Ingredients_Max_Fields = {
  __typename?: 'recipe_ingredients_max_fields';
  id: Maybe<Scalars['Int']['output']>;
  ingredient: Maybe<Scalars['String']['output']>;
  quantity: Maybe<Scalars['Int']['output']>;
  recipe_id: Maybe<Scalars['Int']['output']>;
};

/** order by max() on columns of table "recipe_ingredients" */
export type Recipe_Ingredients_Max_Order_By = {
  id?: InputMaybe<Order_By>;
  ingredient?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
  recipe_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Recipe_Ingredients_Min_Fields = {
  __typename?: 'recipe_ingredients_min_fields';
  id: Maybe<Scalars['Int']['output']>;
  ingredient: Maybe<Scalars['String']['output']>;
  quantity: Maybe<Scalars['Int']['output']>;
  recipe_id: Maybe<Scalars['Int']['output']>;
};

/** order by min() on columns of table "recipe_ingredients" */
export type Recipe_Ingredients_Min_Order_By = {
  id?: InputMaybe<Order_By>;
  ingredient?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
  recipe_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "recipe_ingredients" */
export type Recipe_Ingredients_Mutation_Response = {
  __typename?: 'recipe_ingredients_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Recipe_Ingredients>;
};

/** on_conflict condition type for table "recipe_ingredients" */
export type Recipe_Ingredients_On_Conflict = {
  constraint: Recipe_Ingredients_Constraint;
  update_columns?: Array<Recipe_Ingredients_Update_Column>;
  where?: InputMaybe<Recipe_Ingredients_Bool_Exp>;
};

/** Ordering options when selecting data from "recipe_ingredients". */
export type Recipe_Ingredients_Order_By = {
  id?: InputMaybe<Order_By>;
  ingredient?: InputMaybe<Order_By>;
  ingredientByIngredient?: InputMaybe<Ingredients_Order_By>;
  quantity?: InputMaybe<Order_By>;
  recipe?: InputMaybe<Recipes_Order_By>;
  recipe_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: recipe_ingredients */
export type Recipe_Ingredients_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "recipe_ingredients" */
export type Recipe_Ingredients_Select_Column =
  /** column name */
  | 'id'
  /** column name */
  | 'ingredient'
  /** column name */
  | 'quantity'
  /** column name */
  | 'recipe_id';

/** input type for updating data in table "recipe_ingredients" */
export type Recipe_Ingredients_Set_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  ingredient?: InputMaybe<Scalars['String']['input']>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
  recipe_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate stddev on columns */
export type Recipe_Ingredients_Stddev_Fields = {
  __typename?: 'recipe_ingredients_stddev_fields';
  id: Maybe<Scalars['Float']['output']>;
  quantity: Maybe<Scalars['Float']['output']>;
  recipe_id: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "recipe_ingredients" */
export type Recipe_Ingredients_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
  recipe_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Recipe_Ingredients_Stddev_Pop_Fields = {
  __typename?: 'recipe_ingredients_stddev_pop_fields';
  id: Maybe<Scalars['Float']['output']>;
  quantity: Maybe<Scalars['Float']['output']>;
  recipe_id: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "recipe_ingredients" */
export type Recipe_Ingredients_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
  recipe_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Recipe_Ingredients_Stddev_Samp_Fields = {
  __typename?: 'recipe_ingredients_stddev_samp_fields';
  id: Maybe<Scalars['Float']['output']>;
  quantity: Maybe<Scalars['Float']['output']>;
  recipe_id: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "recipe_ingredients" */
export type Recipe_Ingredients_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
  recipe_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "recipe_ingredients" */
export type Recipe_Ingredients_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Recipe_Ingredients_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Recipe_Ingredients_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  ingredient?: InputMaybe<Scalars['String']['input']>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
  recipe_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type Recipe_Ingredients_Sum_Fields = {
  __typename?: 'recipe_ingredients_sum_fields';
  id: Maybe<Scalars['Int']['output']>;
  quantity: Maybe<Scalars['Int']['output']>;
  recipe_id: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "recipe_ingredients" */
export type Recipe_Ingredients_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
  recipe_id?: InputMaybe<Order_By>;
};

/** update columns of table "recipe_ingredients" */
export type Recipe_Ingredients_Update_Column =
  /** column name */
  | 'id'
  /** column name */
  | 'ingredient'
  /** column name */
  | 'quantity'
  /** column name */
  | 'recipe_id';

export type Recipe_Ingredients_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Recipe_Ingredients_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Recipe_Ingredients_Set_Input>;
  /** filter the rows which have to be updated */
  where: Recipe_Ingredients_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Recipe_Ingredients_Var_Pop_Fields = {
  __typename?: 'recipe_ingredients_var_pop_fields';
  id: Maybe<Scalars['Float']['output']>;
  quantity: Maybe<Scalars['Float']['output']>;
  recipe_id: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "recipe_ingredients" */
export type Recipe_Ingredients_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
  recipe_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Recipe_Ingredients_Var_Samp_Fields = {
  __typename?: 'recipe_ingredients_var_samp_fields';
  id: Maybe<Scalars['Float']['output']>;
  quantity: Maybe<Scalars['Float']['output']>;
  recipe_id: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "recipe_ingredients" */
export type Recipe_Ingredients_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
  recipe_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Recipe_Ingredients_Variance_Fields = {
  __typename?: 'recipe_ingredients_variance_fields';
  id: Maybe<Scalars['Float']['output']>;
  quantity: Maybe<Scalars['Float']['output']>;
  recipe_id: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "recipe_ingredients" */
export type Recipe_Ingredients_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
  recipe_id?: InputMaybe<Order_By>;
};

/** columns and relationships of "recipes" */
export type Recipes = {
  __typename?: 'recipes';
  id: Scalars['Int']['output'];
  image: Maybe<Scalars['String']['output']>;
  preparation_minutes: Scalars['Int']['output'];
  /** An array relationship */
  recipe_ingredients: Array<Recipe_Ingredients>;
  /** An aggregate relationship */
  recipe_ingredients_aggregate: Recipe_Ingredients_Aggregate;
  servings_count: Scalars['Int']['output'];
  source_url: Maybe<Scalars['String']['output']>;
};

/** columns and relationships of "recipes" */
export type RecipesRecipe_IngredientsArgs = {
  distinct_on?: InputMaybe<Array<Recipe_Ingredients_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Recipe_Ingredients_Order_By>>;
  where?: InputMaybe<Recipe_Ingredients_Bool_Exp>;
};

/** columns and relationships of "recipes" */
export type RecipesRecipe_Ingredients_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Recipe_Ingredients_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Recipe_Ingredients_Order_By>>;
  where?: InputMaybe<Recipe_Ingredients_Bool_Exp>;
};

/** aggregated selection of "recipes" */
export type Recipes_Aggregate = {
  __typename?: 'recipes_aggregate';
  aggregate: Maybe<Recipes_Aggregate_Fields>;
  nodes: Array<Recipes>;
};

/** aggregate fields of "recipes" */
export type Recipes_Aggregate_Fields = {
  __typename?: 'recipes_aggregate_fields';
  avg: Maybe<Recipes_Avg_Fields>;
  count: Scalars['Int']['output'];
  max: Maybe<Recipes_Max_Fields>;
  min: Maybe<Recipes_Min_Fields>;
  stddev: Maybe<Recipes_Stddev_Fields>;
  stddev_pop: Maybe<Recipes_Stddev_Pop_Fields>;
  stddev_samp: Maybe<Recipes_Stddev_Samp_Fields>;
  sum: Maybe<Recipes_Sum_Fields>;
  var_pop: Maybe<Recipes_Var_Pop_Fields>;
  var_samp: Maybe<Recipes_Var_Samp_Fields>;
  variance: Maybe<Recipes_Variance_Fields>;
};

/** aggregate fields of "recipes" */
export type Recipes_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Recipes_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Recipes_Avg_Fields = {
  __typename?: 'recipes_avg_fields';
  id: Maybe<Scalars['Float']['output']>;
  preparation_minutes: Maybe<Scalars['Float']['output']>;
  servings_count: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "recipes". All fields are combined with a logical 'AND'. */
export type Recipes_Bool_Exp = {
  _and?: InputMaybe<Array<Recipes_Bool_Exp>>;
  _not?: InputMaybe<Recipes_Bool_Exp>;
  _or?: InputMaybe<Array<Recipes_Bool_Exp>>;
  id?: InputMaybe<Int_Comparison_Exp>;
  image?: InputMaybe<String_Comparison_Exp>;
  preparation_minutes?: InputMaybe<Int_Comparison_Exp>;
  recipe_ingredients?: InputMaybe<Recipe_Ingredients_Bool_Exp>;
  recipe_ingredients_aggregate?: InputMaybe<Recipe_Ingredients_Aggregate_Bool_Exp>;
  servings_count?: InputMaybe<Int_Comparison_Exp>;
  source_url?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "recipes" */
export type Recipes_Constraint =
  /** unique or primary key constraint on columns "id" */
  'recipes_pkey';

/** input type for incrementing numeric columns in table "recipes" */
export type Recipes_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  preparation_minutes?: InputMaybe<Scalars['Int']['input']>;
  servings_count?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "recipes" */
export type Recipes_Insert_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  preparation_minutes?: InputMaybe<Scalars['Int']['input']>;
  recipe_ingredients?: InputMaybe<Recipe_Ingredients_Arr_Rel_Insert_Input>;
  servings_count?: InputMaybe<Scalars['Int']['input']>;
  source_url?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Recipes_Max_Fields = {
  __typename?: 'recipes_max_fields';
  id: Maybe<Scalars['Int']['output']>;
  image: Maybe<Scalars['String']['output']>;
  preparation_minutes: Maybe<Scalars['Int']['output']>;
  servings_count: Maybe<Scalars['Int']['output']>;
  source_url: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Recipes_Min_Fields = {
  __typename?: 'recipes_min_fields';
  id: Maybe<Scalars['Int']['output']>;
  image: Maybe<Scalars['String']['output']>;
  preparation_minutes: Maybe<Scalars['Int']['output']>;
  servings_count: Maybe<Scalars['Int']['output']>;
  source_url: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "recipes" */
export type Recipes_Mutation_Response = {
  __typename?: 'recipes_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Recipes>;
};

/** input type for inserting object relation for remote table "recipes" */
export type Recipes_Obj_Rel_Insert_Input = {
  data: Recipes_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Recipes_On_Conflict>;
};

/** on_conflict condition type for table "recipes" */
export type Recipes_On_Conflict = {
  constraint: Recipes_Constraint;
  update_columns?: Array<Recipes_Update_Column>;
  where?: InputMaybe<Recipes_Bool_Exp>;
};

/** Ordering options when selecting data from "recipes". */
export type Recipes_Order_By = {
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  preparation_minutes?: InputMaybe<Order_By>;
  recipe_ingredients_aggregate?: InputMaybe<Recipe_Ingredients_Aggregate_Order_By>;
  servings_count?: InputMaybe<Order_By>;
  source_url?: InputMaybe<Order_By>;
};

/** primary key columns input for table: recipes */
export type Recipes_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "recipes" */
export type Recipes_Select_Column =
  /** column name */
  | 'id'
  /** column name */
  | 'image'
  /** column name */
  | 'preparation_minutes'
  /** column name */
  | 'servings_count'
  /** column name */
  | 'source_url';

/** input type for updating data in table "recipes" */
export type Recipes_Set_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  preparation_minutes?: InputMaybe<Scalars['Int']['input']>;
  servings_count?: InputMaybe<Scalars['Int']['input']>;
  source_url?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Recipes_Stddev_Fields = {
  __typename?: 'recipes_stddev_fields';
  id: Maybe<Scalars['Float']['output']>;
  preparation_minutes: Maybe<Scalars['Float']['output']>;
  servings_count: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Recipes_Stddev_Pop_Fields = {
  __typename?: 'recipes_stddev_pop_fields';
  id: Maybe<Scalars['Float']['output']>;
  preparation_minutes: Maybe<Scalars['Float']['output']>;
  servings_count: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Recipes_Stddev_Samp_Fields = {
  __typename?: 'recipes_stddev_samp_fields';
  id: Maybe<Scalars['Float']['output']>;
  preparation_minutes: Maybe<Scalars['Float']['output']>;
  servings_count: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "recipes" */
export type Recipes_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Recipes_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Recipes_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  preparation_minutes?: InputMaybe<Scalars['Int']['input']>;
  servings_count?: InputMaybe<Scalars['Int']['input']>;
  source_url?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Recipes_Sum_Fields = {
  __typename?: 'recipes_sum_fields';
  id: Maybe<Scalars['Int']['output']>;
  preparation_minutes: Maybe<Scalars['Int']['output']>;
  servings_count: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "recipes" */
export type Recipes_Update_Column =
  /** column name */
  | 'id'
  /** column name */
  | 'image'
  /** column name */
  | 'preparation_minutes'
  /** column name */
  | 'servings_count'
  /** column name */
  | 'source_url';

export type Recipes_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Recipes_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Recipes_Set_Input>;
  /** filter the rows which have to be updated */
  where: Recipes_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Recipes_Var_Pop_Fields = {
  __typename?: 'recipes_var_pop_fields';
  id: Maybe<Scalars['Float']['output']>;
  preparation_minutes: Maybe<Scalars['Float']['output']>;
  servings_count: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Recipes_Var_Samp_Fields = {
  __typename?: 'recipes_var_samp_fields';
  id: Maybe<Scalars['Float']['output']>;
  preparation_minutes: Maybe<Scalars['Float']['output']>;
  servings_count: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Recipes_Variance_Fields = {
  __typename?: 'recipes_variance_fields';
  id: Maybe<Scalars['Float']['output']>;
  preparation_minutes: Maybe<Scalars['Float']['output']>;
  servings_count: Maybe<Scalars['Float']['output']>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** An array relationship */
  ingredients: Array<Ingredients>;
  /** An aggregate relationship */
  ingredients_aggregate: Ingredients_Aggregate;
  /** fetch data from the table: "ingredients" using primary key columns */
  ingredients_by_pk: Maybe<Ingredients>;
  /** fetch data from the table in a streaming manner: "ingredients" */
  ingredients_stream: Array<Ingredients>;
  /** fetch data from the table: "order_recipes" */
  order_recipes: Array<Order_Recipes>;
  /** fetch aggregated fields from the table: "order_recipes" */
  order_recipes_aggregate: Order_Recipes_Aggregate;
  /** fetch data from the table: "order_recipes" using primary key columns */
  order_recipes_by_pk: Maybe<Order_Recipes>;
  /** fetch data from the table in a streaming manner: "order_recipes" */
  order_recipes_stream: Array<Order_Recipes>;
  /** fetch data from the table: "orders" */
  orders: Array<Orders>;
  /** fetch aggregated fields from the table: "orders" */
  orders_aggregate: Orders_Aggregate;
  /** fetch data from the table: "orders" using primary key columns */
  orders_by_pk: Maybe<Orders>;
  /** fetch data from the table in a streaming manner: "orders" */
  orders_stream: Array<Orders>;
  /** An array relationship */
  recipe_ingredients: Array<Recipe_Ingredients>;
  /** An aggregate relationship */
  recipe_ingredients_aggregate: Recipe_Ingredients_Aggregate;
  /** fetch data from the table: "recipe_ingredients" using primary key columns */
  recipe_ingredients_by_pk: Maybe<Recipe_Ingredients>;
  /** fetch data from the table in a streaming manner: "recipe_ingredients" */
  recipe_ingredients_stream: Array<Recipe_Ingredients>;
  /** fetch data from the table: "recipes" */
  recipes: Array<Recipes>;
  /** fetch aggregated fields from the table: "recipes" */
  recipes_aggregate: Recipes_Aggregate;
  /** fetch data from the table: "recipes" using primary key columns */
  recipes_by_pk: Maybe<Recipes>;
  /** fetch data from the table in a streaming manner: "recipes" */
  recipes_stream: Array<Recipes>;
  /** fetch data from the table: "units" */
  units: Array<Units>;
  /** fetch aggregated fields from the table: "units" */
  units_aggregate: Units_Aggregate;
  /** fetch data from the table: "units" using primary key columns */
  units_by_pk: Maybe<Units>;
  /** fetch data from the table in a streaming manner: "units" */
  units_stream: Array<Units>;
};

export type Subscription_RootIngredientsArgs = {
  distinct_on?: InputMaybe<Array<Ingredients_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Ingredients_Order_By>>;
  where?: InputMaybe<Ingredients_Bool_Exp>;
};

export type Subscription_RootIngredients_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Ingredients_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Ingredients_Order_By>>;
  where?: InputMaybe<Ingredients_Bool_Exp>;
};

export type Subscription_RootIngredients_By_PkArgs = {
  ingredient: Scalars['String']['input'];
};

export type Subscription_RootIngredients_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Ingredients_Stream_Cursor_Input>>;
  where?: InputMaybe<Ingredients_Bool_Exp>;
};

export type Subscription_RootOrder_RecipesArgs = {
  distinct_on?: InputMaybe<Array<Order_Recipes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Order_Recipes_Order_By>>;
  where?: InputMaybe<Order_Recipes_Bool_Exp>;
};

export type Subscription_RootOrder_Recipes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Order_Recipes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Order_Recipes_Order_By>>;
  where?: InputMaybe<Order_Recipes_Bool_Exp>;
};

export type Subscription_RootOrder_Recipes_By_PkArgs = {
  order_id: Scalars['Int']['input'];
  recipe_id: Scalars['Int']['input'];
};

export type Subscription_RootOrder_Recipes_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Order_Recipes_Stream_Cursor_Input>>;
  where?: InputMaybe<Order_Recipes_Bool_Exp>;
};

export type Subscription_RootOrdersArgs = {
  distinct_on?: InputMaybe<Array<Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orders_Order_By>>;
  where?: InputMaybe<Orders_Bool_Exp>;
};

export type Subscription_RootOrders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orders_Order_By>>;
  where?: InputMaybe<Orders_Bool_Exp>;
};

export type Subscription_RootOrders_By_PkArgs = {
  id: Scalars['Int']['input'];
};

export type Subscription_RootOrders_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Orders_Stream_Cursor_Input>>;
  where?: InputMaybe<Orders_Bool_Exp>;
};

export type Subscription_RootRecipe_IngredientsArgs = {
  distinct_on?: InputMaybe<Array<Recipe_Ingredients_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Recipe_Ingredients_Order_By>>;
  where?: InputMaybe<Recipe_Ingredients_Bool_Exp>;
};

export type Subscription_RootRecipe_Ingredients_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Recipe_Ingredients_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Recipe_Ingredients_Order_By>>;
  where?: InputMaybe<Recipe_Ingredients_Bool_Exp>;
};

export type Subscription_RootRecipe_Ingredients_By_PkArgs = {
  id: Scalars['Int']['input'];
};

export type Subscription_RootRecipe_Ingredients_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Recipe_Ingredients_Stream_Cursor_Input>>;
  where?: InputMaybe<Recipe_Ingredients_Bool_Exp>;
};

export type Subscription_RootRecipesArgs = {
  distinct_on?: InputMaybe<Array<Recipes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Recipes_Order_By>>;
  where?: InputMaybe<Recipes_Bool_Exp>;
};

export type Subscription_RootRecipes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Recipes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Recipes_Order_By>>;
  where?: InputMaybe<Recipes_Bool_Exp>;
};

export type Subscription_RootRecipes_By_PkArgs = {
  id: Scalars['Int']['input'];
};

export type Subscription_RootRecipes_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Recipes_Stream_Cursor_Input>>;
  where?: InputMaybe<Recipes_Bool_Exp>;
};

export type Subscription_RootUnitsArgs = {
  distinct_on?: InputMaybe<Array<Units_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Units_Order_By>>;
  where?: InputMaybe<Units_Bool_Exp>;
};

export type Subscription_RootUnits_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Units_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Units_Order_By>>;
  where?: InputMaybe<Units_Bool_Exp>;
};

export type Subscription_RootUnits_By_PkArgs = {
  unit: Scalars['String']['input'];
};

export type Subscription_RootUnits_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Units_Stream_Cursor_Input>>;
  where?: InputMaybe<Units_Bool_Exp>;
};

/** columns and relationships of "units" */
export type Units = {
  __typename?: 'units';
  /** An array relationship */
  ingredients: Array<Ingredients>;
  /** An aggregate relationship */
  ingredients_aggregate: Ingredients_Aggregate;
  unit: Scalars['String']['output'];
};

/** columns and relationships of "units" */
export type UnitsIngredientsArgs = {
  distinct_on?: InputMaybe<Array<Ingredients_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Ingredients_Order_By>>;
  where?: InputMaybe<Ingredients_Bool_Exp>;
};

/** columns and relationships of "units" */
export type UnitsIngredients_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Ingredients_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Ingredients_Order_By>>;
  where?: InputMaybe<Ingredients_Bool_Exp>;
};

/** aggregated selection of "units" */
export type Units_Aggregate = {
  __typename?: 'units_aggregate';
  aggregate: Maybe<Units_Aggregate_Fields>;
  nodes: Array<Units>;
};

/** aggregate fields of "units" */
export type Units_Aggregate_Fields = {
  __typename?: 'units_aggregate_fields';
  count: Scalars['Int']['output'];
  max: Maybe<Units_Max_Fields>;
  min: Maybe<Units_Min_Fields>;
};

/** aggregate fields of "units" */
export type Units_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Units_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "units". All fields are combined with a logical 'AND'. */
export type Units_Bool_Exp = {
  _and?: InputMaybe<Array<Units_Bool_Exp>>;
  _not?: InputMaybe<Units_Bool_Exp>;
  _or?: InputMaybe<Array<Units_Bool_Exp>>;
  ingredients?: InputMaybe<Ingredients_Bool_Exp>;
  ingredients_aggregate?: InputMaybe<Ingredients_Aggregate_Bool_Exp>;
  unit?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "units" */
export type Units_Constraint =
  /** unique or primary key constraint on columns "unit" */
  'units_pkey';

export type Units_Enum = 'g' | 'ml' | 'of';

/** Boolean expression to compare columns of type "units_enum". All fields are combined with logical 'AND'. */
export type Units_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Units_Enum>;
  _in?: InputMaybe<Array<Units_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Units_Enum>;
  _nin?: InputMaybe<Array<Units_Enum>>;
};

/** input type for inserting data into table "units" */
export type Units_Insert_Input = {
  ingredients?: InputMaybe<Ingredients_Arr_Rel_Insert_Input>;
  unit?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Units_Max_Fields = {
  __typename?: 'units_max_fields';
  unit: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Units_Min_Fields = {
  __typename?: 'units_min_fields';
  unit: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "units" */
export type Units_Mutation_Response = {
  __typename?: 'units_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Units>;
};

/** on_conflict condition type for table "units" */
export type Units_On_Conflict = {
  constraint: Units_Constraint;
  update_columns?: Array<Units_Update_Column>;
  where?: InputMaybe<Units_Bool_Exp>;
};

/** Ordering options when selecting data from "units". */
export type Units_Order_By = {
  ingredients_aggregate?: InputMaybe<Ingredients_Aggregate_Order_By>;
  unit?: InputMaybe<Order_By>;
};

/** primary key columns input for table: units */
export type Units_Pk_Columns_Input = {
  unit: Scalars['String']['input'];
};

/** select columns of table "units" */
export type Units_Select_Column =
  /** column name */
  'unit';

/** input type for updating data in table "units" */
export type Units_Set_Input = {
  unit?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "units" */
export type Units_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Units_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Units_Stream_Cursor_Value_Input = {
  unit?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "units" */
export type Units_Update_Column =
  /** column name */
  'unit';

export type Units_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Units_Set_Input>;
  /** filter the rows which have to be updated */
  where: Units_Bool_Exp;
};

export type ThingQueryVariables = Exact<{ [key: string]: never }>;

export type ThingQuery = {
  __typename?: 'query_root';
  ingredients: Array<{ __typename?: 'ingredients'; ingredient: string; unit: Units_Enum }>;
};

export const ThingDocument = gql`
  query thing {
    ingredients {
      ingredient
      unit
    }
  }
`;

export type SdkFunctionWrapper = <T>(
  action: (requestHeaders?: Record<string, string>) => Promise<T>,
  operationName: string,
  operationType?: string,
  variables?: any,
) => Promise<T>;

const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, variables) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    thing(variables?: ThingQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ThingQuery> {
      return withWrapper(
        wrappedRequestHeaders =>
          client.request<ThingQuery>(ThingDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }),
        'thing',
        'query',
        variables,
      );
    },
  };
}
export type Sdk = ReturnType<typeof getSdk>;
