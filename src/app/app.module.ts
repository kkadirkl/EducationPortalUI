import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NotFoundComponent } from './components/base/not-found/not-found.component';

import { UIMainComponent } from './components/ui/ui-main/ui-main.component';
import { UIHomeComponent } from './components/ui/ui-home/ui-home.component';
import { UIHeaderComponent } from './components/ui/ui-header/ui-header.component';
import { UILessonListComponent } from './components/ui/ui-lesson-list/ui-lesson-list.component';
import { UIProfileComponent } from './components/ui/ui-profile/ui-profile.component';

import { PanelMainComponent } from './components/panel/panel-main/panel-main.component';
import { PanelHeaderComponent } from './components/panel/panel-header/panel-header.component';
import { PanelHomeComponent } from './components/panel/panel-home/panel-home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



import { MatButtonModule } from "@angular/material/button";
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatBadgeModule} from '@angular/material/badge';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import {MatRippleModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSliderModule} from '@angular/material/slider';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSortModule} from '@angular/material/sort';
import {MatStepperModule} from '@angular/material/stepper';
import {MatToolbarModule} from '@angular/material/toolbar';
import { RegisterComponent } from './components/base/auth/register/register.component';
import { LoginComponent } from './components/base/auth/login/login.component';
import { MainComponent } from './components/base/auth/main/main.component';
import { LessonListComponent } from './components/panel/panel-lesson/lesson-list/lesson-list.component';
import { LessonAddComponent } from './components/panel/panel-lesson/lesson-add/lesson-add.component';
import { LessonUpdateComponent } from './components/panel/panel-lesson/lesson-update/lesson-update.component';
import { PanelOperationAddComponent } from './components/panel/panel-operation-claim/panel-operation-add/panel-operation-add.component';
import { PanelOperationListComponent } from './components/panel/panel-operation-claim/panel-operation-list/panel-operation-list.component';
import { PanelOperationUpdateComponent } from './components/panel/panel-operation-claim/panel-operation-update/panel-operation-update.component';
import { UserOperationClaimListComponent } from './components/panel/panel-user-operation-claim/user-operation-claim-list/user-operation-claim-list.component';
import { UserOperationClaimAddComponent } from './components/panel/panel-user-operation-claim/user-operation-claim-add/user-operation-claim-add.component';
import { UserOperationClaimUpdateComponent } from './components/panel/panel-user-operation-claim/user-operation-claim-update/user-operation-claim-update.component';
import { UsersComponent } from './components/panel/users/users.component';
import { HttpClientModule,HTTP_INTERCEPTORS  } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AuthInterceptor } from './interceptors/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,    

    UIHomeComponent,
    UIHeaderComponent,
    UIMainComponent,
    UILessonListComponent,
    UIProfileComponent,

    PanelMainComponent,
    PanelHeaderComponent,
    PanelHomeComponent,

    NotFoundComponent,
     RegisterComponent,
     LoginComponent,
     MainComponent,
     LessonListComponent,
     LessonAddComponent,
     LessonUpdateComponent,
     PanelOperationAddComponent,
     PanelOperationListComponent,
     PanelOperationUpdateComponent,
     UserOperationClaimListComponent,
     UserOperationClaimAddComponent,
     UserOperationClaimUpdateComponent,
     UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    MatButtonModule,
    MatGridListModule,
    MatTableModule,
    MatDialogModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDividerModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,

    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
    
  ],
  providers: [    
    {provide:HTTP_INTERCEPTORS, useClass:AuthInterceptor, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
