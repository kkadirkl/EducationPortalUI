import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/base/auth/login/login.component';
import { MainComponent as AuthMainComponent } from './components/base/auth/main/main.component';
import { RegisterComponent } from './components/base/auth/register/register.component';
import { NotFoundComponent } from './components/base/not-found/not-found.component';
import { PanelHomeComponent } from './components/panel/panel-home/panel-home.component';
import { LessonAddComponent } from './components/panel/panel-lesson/lesson-add/lesson-add.component';
import { LessonListComponent } from './components/panel/panel-lesson/lesson-list/lesson-list.component';
import { LessonUpdateComponent } from './components/panel/panel-lesson/lesson-update/lesson-update.component';
import { PanelMainComponent } from './components/panel/panel-main/panel-main.component';
import { PanelOperationAddComponent } from './components/panel/panel-operation-claim/panel-operation-add/panel-operation-add.component';
import { PanelOperationListComponent } from './components/panel/panel-operation-claim/panel-operation-list/panel-operation-list.component';
import { PanelOperationUpdateComponent } from './components/panel/panel-operation-claim/panel-operation-update/panel-operation-update.component';
import { UserOperationClaimAddComponent } from './components/panel/panel-user-operation-claim/user-operation-claim-add/user-operation-claim-add.component';
import { UserOperationClaimListComponent } from './components/panel/panel-user-operation-claim/user-operation-claim-list/user-operation-claim-list.component';
import { UserOperationClaimUpdateComponent } from './components/panel/panel-user-operation-claim/user-operation-claim-update/user-operation-claim-update.component';
import { UsersComponent } from './components/panel/users/users.component';
import { UIHomeComponent } from './components/ui/ui-home/ui-home.component';
import { UILessonListComponent } from './components/ui/ui-lesson-list/ui-lesson-list.component';
import { UIMainComponent } from './components/ui/ui-main/ui-main.component';
import { UIProfileComponent } from './components/ui/ui-profile/ui-profile.component';
import { AdminGuard } from './guards/admin.guard';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [


  {path:'',component:UIMainComponent,children:[
    {path:'',component:UIHomeComponent},
    {path:'lessons',component:UILessonListComponent,canActivate:[AuthGuard]},
    {path:'auth',children:[
      {path:'register',component:RegisterComponent},
      {path:'login',component:LoginComponent},     
    ]},
   ]},

   

   {path:'panel',component:PanelMainComponent,canActivate:[AuthGuard],children:[
     {path:'',component:PanelHomeComponent},
     {path:'users',component:UsersComponent,canActivate:[AdminGuard]},
     {path:'operation-claim',children:[
       {path:'list',component:PanelOperationListComponent,canActivate:[AdminGuard]},
       {path:'add',component:PanelOperationAddComponent,canActivate:[AdminGuard]},
       {path:'update/:id',component:PanelOperationUpdateComponent,canActivate:[AdminGuard]}
     ]},
     {path:'user-operation-claim',children:[
      {path:'list',component:UserOperationClaimListComponent,canActivate:[AdminGuard]},
      {path:'add',component:UserOperationClaimAddComponent,canActivate:[AdminGuard]},
      {path:'update/:id',component:UserOperationClaimUpdateComponent,canActivate:[AdminGuard]}
    ]},
    {path:'lesson',children:[
      {path:'list',component:LessonListComponent},
      {path:'add',component:LessonAddComponent,canActivate:[AdminGuard]},
      {path:'update/:id',component:LessonUpdateComponent,canActivate:[AdminGuard]}
    ]},
   ]},

   {path:'**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
