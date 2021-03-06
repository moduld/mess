import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import {
ConversationComponent,
StartComponent,
ConversationTypeSwitchComponent,
ChateBodyComponent,
ConversationTypeComponent,
ProductsComponent,
AddEmployeeModalComponent,
AppsBarComponent,
MessageItemComponent} from './components';

import {
  RequestService,
  ConfigService,
  StorageService,
  WebSocketService,
  EventsExchangeService,
  MediaFilesService } from './services';

import { routing } from './routing.module';
import { FilterConversationsPipe } from './pipes/filter-conversations.pipe';
import { DaysPipe } from './pipes/days.pipe';
import {MainComponentResolve} from './resolvers';
import { CarretToEndDirective } from './directives/carret-to-end.directive';
import { SharedModule } from '../lazy-for-messenger/shared-module/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    routing,
    UiLayoutModule,
    UiNotificationModule,
    CoreModule,
    UiModalModule,
    SharedModule.forRoot(),
    UiFormModule,
    UiSearchModule,
    ProgressbarModule.forRoot(),
    ScrollEndDetectionModule,
    IconsProviderModule
  ],
    providers: [
      RequestService,
      ConfigService,
      StorageService,
      MainComponentResolve,
      WebSocketService,
      EventsExchangeService,
      MediaFilesService
    ],
    declarations: [
      ConversationComponent,
      StartComponent,
      ConversationTypeSwitchComponent,
      ChateBodyComponent,
      ConversationTypeComponent,
      ProductsComponent,
      AppsBarComponent,
      AddEmployeeModalComponent,
      FilterConversationsPipe,
      MessageItemComponent,
      DaysPipe,
      CarretToEndDirective
    ]
})
export class PEMessengerModule { }
