import { configureStore } from '@reduxjs/toolkit'
import RoleSlice from './Reducer/RoleSlice'
import AuthSlice from './Reducer/AuthSlice'
import SupportSubjectSlice from './Reducer/SupportSubjectSlice'
import CategorySlice from './Reducer/CategorySlice'
import SubCategorySlice from './Reducer/SubCategorySlice'
import UserSlice from './Reducer/UserSlice'
import LayoutSice from './Reducer/LayoutSice'
import SkillSlice from './Reducer/SkillSlice'
import CompanySlice from './Reducer/CompanySlice'
import DesignationSlice from './Reducer/DesignationSlice'

import SupportRequestSlice from './Reducer/SupportRequestSlice'

export const store = configureStore({
  reducer: {
    CategorySlice: CategorySlice,
    AuthSlice: AuthSlice,
    RoleSlice: RoleSlice,
    SupportSubjectSlice: SupportSubjectSlice,
    SubCategorySlice: SubCategorySlice,
    UserSlice: UserSlice,
    LayoutSlice: LayoutSice,
    SkillSlice: SkillSlice,
    CompanySlice: CompanySlice,
    DesignationSlice : DesignationSlice,
    SupportRequestSlice: SupportRequestSlice
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    })
})
