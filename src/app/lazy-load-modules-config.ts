/**
 * These modules are only loaded when browsed to
 */
export const LazyLoadedModulesConfiguration = [
    {
        name: 'advertisements.**',
        url: '/advertisements',
        //  loadChildren: () => import('./modules/ngX/agent-management/agent-management.module').then((module) => module.AgentManagementModule)
    }
];