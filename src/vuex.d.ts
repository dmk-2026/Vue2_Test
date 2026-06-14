declare module 'vuex' {
  import Vue from 'vue'
  
  export interface ActionContext<S, R> {
    dispatch: Dispatch
    commit: Commit
    state: S
    rootState: R
    getters: any
    rootGetters: any
  }
  
  export interface Dispatch {
    (type: string, payload?: any, options?: DispatchOptions): Promise<any>
    <P>(payloadWithType: P & { type: string }, options?: DispatchOptions): Promise<any>
  }
  
  export interface Commit {
    (type: string, payload?: any, options?: CommitOptions): void
    <P>(payloadWithType: P & { type: string }, options?: CommitOptions): void
  }
  
  export interface DispatchOptions {
    root?: boolean
  }
  
  export interface CommitOptions {
    silent?: boolean
    root?: boolean
  }
  
  export interface Module<S, R> {
    namespaced?: boolean
    state?: S | (() => S)
    getters?: GetterTree<S, R>
    actions?: ActionTree<S, R>
    mutations?: MutationTree<S>
    modules?: ModuleTree<R>
  }
  
  export interface GetterTree<S, R> {
    [key: string]: (state: S, getters: any, rootState: R, rootGetters: any) => any
  }
  
  export interface ActionTree<S, R> {
    [key: string]: (context: ActionContext<S, R>, payload?: any) => any
  }
  
  export interface MutationTree<S> {
    [key: string]: (state: S, payload?: any) => void
  }
  
  export interface ModuleTree<R> {
    [key: string]: Module<any, R>
  }
  
  export interface StoreOptions<S> {
    state?: S | (() => S)
    getters?: GetterTree<S, S>
    actions?: ActionTree<S, S>
    mutations?: MutationTree<S>
    modules?: ModuleTree<S>
    plugins?: Plugin<S>[]
    strict?: boolean
  }
  
  export interface Plugin<S> {
    (store: Store<S>): void
  }
  
  export class Store<S> {
    constructor(options: StoreOptions<S>)
    state: S
    commit: Commit
    dispatch: Dispatch
    getters: any
    subscribe(handler: (mutation: any, state: S) => void): () => void
    subscribeAction(handler: (action: any, state: S) => void): () => void
    registerModule(path: string | string[], module: Module<any, S>): void
    unregisterModule(path: string | string[]): void
    hasModule(path: string | string[]): boolean
    hotUpdate(newOptions: StoreOptions<S>): void
  }
  
  export function install(Vue: typeof Vue): void
  
  export function mapState<T>(states: string[]): any
  export function mapState<T>(states: { [key: string]: string | ((state: T) => any) }): any
  
  export function mapMutations(mutations: string[]): any
  export function mapMutations(mutations: { [key: string]: string | ((commit: Commit, ...args: any[]) => any) }): any
  
  export function mapActions(actions: string[]): any
  export function mapActions(actions: { [key: string]: string | ((dispatch: Dispatch, ...args: any[]) => any) }): any
  
  export function mapGetters(getters: string[]): any
  export function mapGetters(getters: { [key: string]: string }): any
  
  export default { Store, install, mapState, mapMutations, mapActions, mapGetters }
}