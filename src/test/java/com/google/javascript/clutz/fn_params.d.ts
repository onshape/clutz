declare namespace ಠ_ಠ.clutz_internal.fn_params {
  function declaredWithType ( ...a : any [] ) : any ;
  function optional (x : string , opt_y ? : number ) : number ;
  function optionalNullable (x : string , opt_y ? : number ) : number ;
  /**
   * Parameters intentionally documented in the wrong order
   */
  function varargs (x : string ,  ...y : ( number ) [] ) : void ;
  function varargs_fns ( ...var_args : ( ( ...a : any [] ) => any ) [] ) : void ;
}
declare namespace ಠ_ಠ.clutz_internal.goog {
  function require(name: 'fn_params'): typeof ಠ_ಠ.clutz_internal.fn_params;
}
declare module 'goog:fn_params' {
  import alias = ಠ_ಠ.clutz_internal.fn_params;
  export = alias;
}