declare namespace ಠ_ಠ.clutz.typesWithExterns {
  class Error extends Error_Instance {
  }
  class Error_Instance extends GlobalError {
    constructor ( ) ;
  }
  interface ExtendsIThenable extends PromiseLike < any > {
  }
  class ExtendsXMLHttpRequest extends ExtendsXMLHttpRequest_Instance {
  }
  class ExtendsXMLHttpRequest_Instance extends XMLHttpRequest {
  }
  var a : { a : number } ;
  var b : IArguments ;
  var c : NodeList ;
  function elementMaybe ( ) : GlobalElement | null ;
  var myScope : ಠ_ಠ.clutz.namespace.Foo ;
  function topLevelFunction ( ...a : any [] ) : any ;
}
declare module 'goog:typesWithExterns' {
  import alias = ಠ_ಠ.clutz.typesWithExterns;
  export = alias;
}
declare namespace ಠ_ಠ.clutz.typesWithExterns {
  class A extends A_Instance {
  }
  class A_Instance {
    private noStructuralTyping_: any;
    constructor (n : number ) ;
    apply : number ;
  }
}
declare module 'goog:typesWithExterns.A' {
  import alias = ಠ_ಠ.clutz.typesWithExterns.A;
  export default alias;
}
/* skipped emitting type alias typesWithExterns.ArrayLike to avoid collision with existing one in lib.d.ts. */
declare namespace ಠ_ಠ.clutz.typesWithExterns {
  class B extends B_Instance {
  }
  class B_Instance extends ಠ_ಠ.clutz.typesWithExterns.A_Instance {
    constructor ( ) ;
  }
}
declare module 'goog:typesWithExterns.B' {
  import alias = ಠ_ಠ.clutz.typesWithExterns.B;
  export default alias;
}
declare namespace ಠ_ಠ.clutz.typesWithExterns {
  class C extends C_Instance {
  }
  class C_Instance extends ಠ_ಠ.clutz.typesWithExterns.A_Instance {
    constructor ( ) ;
  }
}
declare module 'goog:typesWithExterns.C' {
  import alias = ಠ_ಠ.clutz.typesWithExterns.C;
  export default alias;
}
declare namespace ಠ_ಠ.clutz {
  class AbortController extends AbortController_Instance {
  }
  class AbortController_Instance {
    private noStructuralTyping_: any;
    abort ( ) : any ;
    signal : AbortSignal ;
  }
}
declare namespace ಠ_ಠ.clutz {
  interface AbortSignal {
    aborted : boolean ;
    onabort : ( (a : GlobalEvent ) => any ) | null ;
  }
}
declare namespace ಠ_ಠ.clutz {
  class ByteLengthQueuingStrategy extends ByteLengthQueuingStrategy_Instance {
  }
  class ByteLengthQueuingStrategy_Instance {
    private noStructuralTyping_: any;
    constructor (config : { highWaterMark : number } ) ;
    /**
     * If we don't want to be strict we can define chunk as {*}
     * and return as {number|undefined}
     */
    size (chunk : { byteLength : number } ) : number ;
  }
}
declare namespace ಠ_ಠ.clutz {
  class CountQueuingStrategy extends CountQueuingStrategy_Instance {
  }
  class CountQueuingStrategy_Instance {
    private noStructuralTyping_: any;
    constructor (config : { highWaterMark : number } ) ;
    size (chunk : any ) : number ;
  }
}
declare namespace ಠ_ಠ.clutz {
  class DirectoryEntry extends DirectoryEntry_Instance {
  }
  class DirectoryEntry_Instance extends Entry_Instance {
    createReader ( ) : DirectoryReader ;
    getDirectory (path : string , options ? : FileSystemFlags , successCallback ? : (a : DirectoryEntry ) => any , errorCallback ? : (a : FileError ) => any ) : void ;
    getFile (path : string , options ? : FileSystemFlags , successCallback ? : (a : FileEntry ) => any , errorCallback ? : (a : FileError ) => any ) : void ;
    removeRecursively (successCallback : ( ) => any , errorCallback ? : (a : FileError ) => any ) : void ;
  }
}
declare namespace ಠ_ಠ.clutz {
  class DirectoryReader extends DirectoryReader_Instance {
  }
  class DirectoryReader_Instance {
    private noStructuralTyping_: any;
    readEntries (successCallback : (a : Entry [] ) => any , errorCallback ? : (a : FileError ) => any ) : void ;
  }
}
declare namespace ಠ_ಠ.clutz {
  class Entry extends Entry_Instance {
  }
  class Entry_Instance {
    private noStructuralTyping_: any;
    copyTo (parent : DirectoryEntry , newName ? : string , successCallback ? : (a : Entry ) => any , errorCallback ? : (a : FileError ) => any ) : void ;
    filesystem : FileSystem ;
    fullPath : string ;
    getMetadata (successCallback : (a : Metadata ) => any , errorCallback ? : (a : FileError ) => any ) : void ;
    getParent (successCallback : (a : Entry ) => any , errorCallback ? : (a : FileError ) => any ) : void ;
    isDirectory : boolean ;
    isFile : boolean ;
    moveTo (parent : DirectoryEntry , newName ? : string , successCallback ? : (a : Entry ) => any , errorCallback ? : (a : FileError ) => any ) : void ;
    name : string ;
    remove (successCallback : ( ) => any , errorCallback ? : (a : FileError ) => any ) : void ;
    toURL (mimeType ? : string ) : string ;
  }
}
declare namespace ಠ_ಠ.clutz {
  class FileEntry extends FileEntry_Instance {
  }
  class FileEntry_Instance extends Entry_Instance {
    createWriter (successCallback : (a : FileWriter ) => any , errorCallback ? : (a : FileError ) => any ) : void ;
    file (successCallback : (a : File ) => any , errorCallback ? : (a : FileError ) => any ) : void ;
  }
}
declare namespace ಠ_ಠ.clutz {
  class FileError extends FileError_Instance {
    static ABORT_ERR : number ;
    static ENCODING_ERR : number ;
    static INVALID_MODIFICATION_ERR : number ;
    static INVALID_STATE_ERR : number ;
    static NOT_FOUND_ERR : number ;
    static NOT_READABLE_ERR : number ;
    static NO_MODIFICATION_ALLOWED_ERR : number ;
    static PATH_EXISTS_ERR : number ;
    static QUOTA_EXCEEDED_ERR : number ;
    static SECURITY_ERR : number ;
    static SYNTAX_ERR : number ;
    static TYPE_MISMATCH_ERR : number ;
  }
  class FileError_Instance extends DOMError {
    ABORT_ERR : number ;
    ENCODING_ERR : number ;
    INVALID_MODIFICATION_ERR : number ;
    INVALID_STATE_ERR : number ;
    NOT_FOUND_ERR : number ;
    NOT_READABLE_ERR : number ;
    NO_MODIFICATION_ALLOWED_ERR : number ;
    PATH_EXISTS_ERR : number ;
    QUOTA_EXCEEDED_ERR : number ;
    SECURITY_ERR : number ;
    SYNTAX_ERR : number ;
    TYPE_MISMATCH_ERR : number ;
    code : number ;
  }
}
declare namespace ಠ_ಠ.clutz {
  class FileSaver extends FileSaver_Instance {
  }
  class FileSaver_Instance {
    private noStructuralTyping_: any;
    DONE : number ;
    INIT : number ;
    WRITING : number ;
    abort ( ) : void ;
    error : FileError | null ;
    onabort : ( (a : ProgressEvent ) => any ) | null ;
    onerror : ( (a : ProgressEvent ) => any ) | null ;
    onprogress : ( (a : ProgressEvent ) => any ) | null ;
    onwrite : ( (a : ProgressEvent ) => any ) | null ;
    onwriteend : ( (a : ProgressEvent ) => any ) | null ;
    onwritestart : ( (a : ProgressEvent ) => any ) | null ;
    readyState : number ;
  }
}
declare namespace ಠ_ಠ.clutz {
  class FileSystem extends FileSystem_Instance {
  }
  class FileSystem_Instance {
    private noStructuralTyping_: any;
    name : string ;
    root : DirectoryEntry ;
  }
}
declare namespace ಠ_ಠ.clutz {
  interface FileSystemFlags {
    create ? : boolean ;
    exclusive ? : boolean ;
  }
}
declare namespace ಠ_ಠ.clutz {
  class FileWriter extends FileWriter_Instance {
  }
  class FileWriter_Instance extends FileSaver_Instance {
    length : number ;
    position : number ;
    seek (offset : number ) : void ;
    truncate (size : number ) : void ;
    write (blob : Blob ) : void ;
  }
}
declare namespace ಠ_ಠ.clutz {
  /**
   * Metadata interface.
   */
  class Metadata extends Metadata_Instance {
  }
  class Metadata_Instance {
    private noStructuralTyping_: any;
    modificationTime : GlobalDate ;
    size : number ;
  }
}
declare namespace ಠ_ಠ.clutz {
  interface RTCRtpTransceiverInit {
    /**
     * The direction of the `RTCRtpTransceiver`. Defaults to "sendrecv".
     */
    direction ? : string | null ;
    sendEncodings ? : RTCRtpEncodingParameters [] | null ;
    /**
     * The streams to add to the tranceiver's sender.
     */
    streams ? : MediaStream [] | null ;
  }
}
declare namespace ಠ_ಠ.clutz {
  /**
   * The ReadableByteStreamController constructor cannot be used directly;
   * it only works on a ReadableStream that is in the middle of being constructed.
   */
  interface ReadableByteStreamController {
    byobRequest : ReadableStreamBYOBRequest ;
    close ( ) : void ;
    desiredSize : number ;
    enqueue (chunk : ArrayBufferView ) : void ;
    error (err : any ) : void ;
  }
}
declare namespace ಠ_ಠ.clutz {
  /**
   * The ReadableStreamBYOBReader constructor is generally not meant to be used
   * directly; instead, a stream’s getReader() method should be used.
   */
  interface ReadableStreamBYOBReader {
    cancel (reason : any ) : Promise < any > ;
    closed : Promise < undefined > ;
    read (view : ArrayBufferView ) : Promise < { done : boolean , value : any } > ;
    releaseLock ( ) : void ;
  }
}
declare namespace ಠ_ಠ.clutz {
  interface ReadableStreamBYOBRequest {
    respond (bytesWritten : number ) : void ;
    respondWithNewView (view : ArrayBufferView ) : void ;
    view : ArrayBufferView ;
  }
}
declare namespace ಠ_ಠ.clutz {
  /**
   * The ReadableStreamDefaultController constructor cannot be used directly;
   * it only works on a ReadableStream that is in the middle of being constructed.
   */
  interface ReadableStreamDefaultController {
    close ( ) : void ;
    desiredSize : number ;
    enqueue (chunk : any ) : void ;
    error (err : any ) : void ;
  }
}
declare namespace ಠ_ಠ.clutz {
  /**
   * The ReadableStreamDefaultReader constructor is generally not meant to be used directly;
   * instead, a stream’s getReader() method should be used.
   */
  interface ReadableStreamDefaultReader {
    cancel (reason : any ) : Promise < any > ;
    closed : Promise < undefined > ;
    read ( ) : Promise < { done : boolean , value : any } > ;
    releaseLock ( ) : void ;
  }
}
declare namespace ಠ_ಠ.clutz {
  interface ReadableStreamSource {
    autoAllocateChunkSize ? : number ;
    cancel ? : (a : any ) => Promise < any > | undefined ;
    pull ? : (a : ReadableByteStreamController | ReadableStreamDefaultController ) => PromiseLike < any > | undefined ;
    start ? : (a : ReadableByteStreamController | ReadableStreamDefaultController ) => PromiseLike < any > | undefined ;
    type ? : string ;
  }
}
declare namespace ಠ_ಠ.clutz {
  class StorageManager extends StorageManager_Instance {
  }
  class StorageManager_Instance {
    private noStructuralTyping_: any;
    estimate ( ) : Promise < { quota : number , usage : number } > ;
    persist ( ) : Promise < boolean > ;
    persisted ( ) : Promise < boolean > ;
  }
}
declare namespace ಠ_ಠ.clutz {
  class WritableStream extends WritableStream_Instance {
  }
  class WritableStream_Instance {
    private noStructuralTyping_: any;
    constructor (opt_underlyingSink ? : WritableStreamSink , opt_queuingStrategy ? : CountQueuingStrategy | ByteLengthQueuingStrategy | { highWaterMark : number , size ? : (a : any ) => number } ) ;
    abort (reason : any ) : Promise < undefined > ;
    getWriter ( ) : WritableStreamDefaultWriter ;
    locked : boolean ;
  }
}
declare namespace ಠ_ಠ.clutz {
  /**
   * The WritableStreamDefaultController constructor cannot be used directly;
   * it only works on a WritableStream that is in the middle of being constructed.
   */
  interface WritableStreamDefaultController {
    error (err : any ) : Promise < undefined > ;
  }
}
declare namespace ಠ_ಠ.clutz {
  interface WritableStreamDefaultWriter {
    abort (reason : any ) : Promise < undefined > ;
    close ( ) : Promise < undefined > ;
    closed : Promise < undefined > ;
    desiredSize : number ;
    ready : Promise < number > ;
    releaseLock ( ) : void ;
    write (chunk : any ) : Promise < undefined > ;
  }
}
declare namespace ಠ_ಠ.clutz {
  interface WritableStreamSink {
    abort ? : (a : any ) => PromiseLike < any > | undefined ;
    close ? : ( ) => PromiseLike < any > | undefined ;
    start ? : (a : WritableStreamDefaultController ) => PromiseLike < any > | undefined ;
    write ? : (a : any , b : WritableStreamDefaultController ) => PromiseLike < any > | undefined ;
  }
}
declare namespace ಠ_ಠ.clutz {
  function functionNamespace (descriptor : { is : string } ) : any ;
}
declare namespace ಠ_ಠ.clutz.functionNamespace {
  function dom (nodeOrEvent : Node | null | GlobalEvent ) : functionNamespaceHelperClass ;
}
declare namespace ಠ_ಠ.clutz.functionNamespace {
  class privateClass extends privateClass_Instance {
  }
  class privateClass_Instance {
    private noStructuralTyping_: any;
  }
}
declare namespace ಠ_ಠ.clutz {
  class functionNamespaceHelperClass extends functionNamespaceHelperClass_Instance {
  }
  class functionNamespaceHelperClass_Instance {
    private noStructuralTyping_: any;
  }
}
declare namespace ಠ_ಠ.clutz.namespace {
  class Foo extends Foo_Instance {
    static staticField : string ;
    static staticMethod ( ) : string ;
  }
  class Foo_Instance {
    private noStructuralTyping_: any;
    member : string ;
    method (opt_exp ? : (a : ಠ_ಠ.clutz.namespace.Foo ) => any ) : any ;
  }
}
declare namespace ಠ_ಠ.clutz.namespace {
  type atypedef = (a : string , b ? : ಠ_ಠ.clutz.namespace.atypedef.Options ) => ಠ_ಠ.clutz.namespace.atypedef.Cache < any > ;
}
declare namespace ಠ_ಠ.clutz.namespace.atypedef {
  class Cache < T > extends Cache_Instance < T > {
  }
  class Cache_Instance < T > {
    private noStructuralTyping_: any;
    destroy ( ) : any ;
    get (key : string ) : T ;
    info ( ) : ಠ_ಠ.clutz.namespace.atypedef.Cache.Info ;
    put (key : string , value : T ) : any ;
    remove (key : string ) : any ;
    removeAll ( ) : any ;
  }
}
declare namespace ಠ_ಠ.clutz.namespace.atypedef.Cache {
  type Info = { id : string , options : ಠ_ಠ.clutz.namespace.atypedef.Options , size : number } ;
}
declare namespace ಠ_ಠ.clutz.namespace.atypedef {
  type Options = { capacity ? : number } ;
}
declare namespace ಠ_ಠ.clutz.namespace.atypedef {
  type get = (a : string ) => ಠ_ಠ.clutz.namespace.atypedef.Cache < any > | null ;
}
declare namespace ಠ_ಠ.clutz.namespace {
  function bootstrap (arg1 : GlobalElement | null | HTMLDocument , opt_arg2 ? : ( string | Function | null ) [] | null ) : any ;
}
declare namespace ಠ_ಠ.clutz.window {
  /**
   * Possible values are "sendrecv", "sendonly", "recvonly", and "inactive".
   */
  type RTCRtpTransceiverDirection = string ;
}
declare namespace ಠ_ಠ.clutz.window {
  type StorageEstimate = { quota : number , usage : number } ;
}
