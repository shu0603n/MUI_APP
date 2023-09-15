import { lazy } from 'react';

// project import
import MainLayout from 'layout/MainLayout';
import CommonLayout from 'layout/CommonLayout';
import Loadable from 'components/Loadable';
// import AuthGuard from 'utils/route-guard/AuthGuard';

// render - top
const TopPage = Loadable(lazy(() => import('pages/top/top-page')));

// render - employee
const EmployeeList = Loadable(lazy(() => import('pages/employee/employee-list')));
const EmployeeDetail = Loadable(lazy(() => import('pages/employee/employee-detail')));

// render - client
const ClientList = Loadable(lazy(() => import('pages/client/client-list')));
const ClientDetail = Loadable(lazy(() => import('pages/client/client-detail')));

const EmployeeProfile = Loadable(lazy(() => import('pages/employee/employee-detail')));
const EmployeeTabProfile = Loadable(lazy(() => import('sections/apps/employee/account/TabProfile')));
const EmployeeTabPersonal = Loadable(lazy(() => import('sections/apps/employee/account/TabPersonal')));
const EmployeeTabAccount = Loadable(lazy(() => import('sections/apps/employee/account/TabAccount')));
const EmployeeTabPassword = Loadable(lazy(() => import('sections/apps/employee/account/TabPassword')));
const EmployeeTabSkill = Loadable(lazy(() => import('sections/apps/employee/account/TabSkill')));
const EmployeeTabSettings = Loadable(lazy(() => import('sections/apps/employee/account/TabSettings')));

const ClientProfile = Loadable(lazy(() => import('pages/client/client-detail')));
const ClientTabProfile = Loadable(lazy(() => import('sections/apps/client/account/TabProfile')));
const ClientTabPersonal = Loadable(lazy(() => import('sections/apps/client/account/TabPersonal')));
const ClientTabAccount = Loadable(lazy(() => import('sections/apps/client/account/TabAccount')));
const ClientTabPassword = Loadable(lazy(() => import('sections/apps/client/account/TabPassword')));
const ClientTabRole = Loadable(lazy(() => import('sections/apps/client/account/TabRole')));
const ClientTabSettings = Loadable(lazy(() => import('sections/apps/client/account/TabSettings')));

// pages routing
const AuthLogin = Loadable(lazy(() => import('pages/auth/login')));
const AuthRegister = Loadable(lazy(() => import('pages/auth/register')));
const AuthForgotPassword = Loadable(lazy(() => import('pages/auth/forgot-password')));
const AuthResetPassword = Loadable(lazy(() => import('pages/auth/reset-password')));
const AuthCheckMail = Loadable(lazy(() => import('pages/auth/check-mail')));
const AuthCodeVerification = Loadable(lazy(() => import('pages/auth/code-verification')));

const MaintenanceError = Loadable(lazy(() => import('pages/maintenance/404')));
const MaintenanceError500 = Loadable(lazy(() => import('pages/maintenance/500')));
const MaintenanceUnderConstruction = Loadable(lazy(() => import('pages/maintenance/under-construction')));
const MaintenanceComingSoon = Loadable(lazy(() => import('pages/maintenance/coming-soon')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  children: [
    {
      path: '/',
      element: (
        // <AuthGuard>
        <MainLayout />
        // </AuthGuard>
      ),
      children: [
        {
          path: 'top',
          element: <TopPage />
        },

        {
          path: 'employee',
          element: <EmployeeList />,
          children: [
            {
              path: 'employee-detail',
              element: <EmployeeDetail />
            }
          ]
        },

        {
          path: 'client',
          children: [
            {
              path: 'client-list',
              element: <ClientList />
            },
            {
              path: 'client-detail',
              element: <ClientDetail />
            }
          ]
        },
        {
          path: 'employee',
          children: [
            {
              path: 'detail/:id',
              element: <EmployeeProfile />,
              children: [
                {
                  path: 'basic',
                  element: <EmployeeTabProfile />
                },
                {
                  path: 'personal',
                  element: <EmployeeTabPersonal />
                },
                {
                  path: 'my-account',
                  element: <EmployeeTabAccount />
                },
                {
                  path: 'password',
                  element: <EmployeeTabPassword />
                },
                {
                  path: 'skill',
                  element: <EmployeeTabSkill />
                },
                {
                  path: 'settings',
                  element: <EmployeeTabSettings />
                }
              ]
            }
          ]
        },
        {
          path: 'client',
          children: [
            {
              path: 'client-detail',
              element: <ClientProfile />,
              children: [
                {
                  path: 'basic',
                  element: <ClientTabProfile />
                },
                {
                  path: 'personal',
                  element: <ClientTabPersonal />
                },
                {
                  path: 'my-account',
                  element: <ClientTabAccount />
                },
                {
                  path: 'password',
                  element: <ClientTabPassword />
                },
                {
                  path: 'role',
                  element: <ClientTabRole />
                },
                {
                  path: 'settings',
                  element: <ClientTabSettings />
                }
              ]
            }
          ]
        }
      ]
    },
    {
      path: '/maintenance',
      element: <CommonLayout />,
      children: [
        {
          path: '404',
          element: <MaintenanceError />
        },
        {
          path: '500',
          element: <MaintenanceError500 />
        },
        {
          path: 'under-construction',
          element: <MaintenanceUnderConstruction />
        },
        {
          path: 'coming-soon',
          element: <MaintenanceComingSoon />
        }
      ]
    },
    {
      path: '/auth',
      element: <CommonLayout />,
      children: [
        {
          path: 'login',
          element: <AuthLogin />
        },
        {
          path: 'register',
          element: <AuthRegister />
        },
        {
          path: 'forgot-password',
          element: <AuthForgotPassword />
        },
        {
          path: 'reset-password',
          element: <AuthResetPassword />
        },
        {
          path: 'check-mail',
          element: <AuthCheckMail />
        },
        {
          path: 'code-verification',
          element: <AuthCodeVerification />
        }
      ]
    }
  ]
};

export default MainRoutes;
