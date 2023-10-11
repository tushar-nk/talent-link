import { AUTH, BASE_URL, POST } from 'src/@core/utils/HTTP'

export const Image_API = 'http://67.205.148.222:9005/public'

//** ------------  Admin User Api-------------   **//
export const SignInAPI = data => AUTH(`${BASE_URL}/admin/signIn`, data)
export const ForgetPassword = data => POST(`${BASE_URL}/admin/adminForgotPassword`, data)

//** ------------ User Api-------------   **//
export const CreateUserAPI = data => POST(`${BASE_URL}/admin/createAdmin`, data)
export const AdminUserTable  = data => POST(`${BASE_URL}/admin/getAllAdmin`, data)
export const SoftDeleteAdmin = data => POST(`${BASE_URL}/admin/softDeleteAdmin`, data)
export const HardDeleteAdmin = data => POST(`${BASE_URL}/admin/hardDeleteAdmin`, data)
export const getAllActiveAdminUser = data => POST(` ${BASE_URL}/role/getAllActiveRole`,data)
export const getAdminById = data => POST(` ${BASE_URL}/admin/getAdminById`,data)
export const UpdateAdmin = data => POST(` ${BASE_URL}/admin/updateAdmin`,data)

//** ------------  Role Api-------------   **//
export const CreateRole = data => POST(`${BASE_URL}/role/createRole`, data)
export const GetAllRole = data => POST(`${BASE_URL}/role/getAllRole`, data)
export const HardDeleteRoleAPI = data => POST(`${BASE_URL}/role/hardDeleteRole`, data)
export const SoftDeleteRoleAPI = data => POST(`${BASE_URL}/role/softDeleteRole`, data)
export const UpdateRoleAPI = data => POST(`${BASE_URL}/role/updateRole`, data)
export const GetRoleByIdAPI = data => POST(`${BASE_URL}/role/getRoleById`, data)



//** ------------  Category Api-------------   **//
export const CreateCategoryAPI = (data) => POST(`${BASE_URL}/category/createCategory`, data);
export const UpdateCategoryAPI = (data) => POST(`${BASE_URL}/category/updateCategory`, data);
export const HardDeleteCategoryAPI = (data) => POST(`${BASE_URL}/category/hardDeleteCategory`, data);
export const SoftDeleteCategoryAPI = (data) => POST(`${BASE_URL}/category/softDeleteCategory`, data);
export const GetCategoryByIdAPI = (data) => POST(`${BASE_URL}/category/getCategoryById`, data);
export const GetAllCategoriesAPI = (data) => POST(`${BASE_URL}/category/getAllCategories`, data);


//** ------------ Support Subject Api-------------   **//
export const AddSupportSubjectAPI = (data) => POST(`${BASE_URL}/support-subject/createSupportSubject`, data);
export const UpdateSupportSubjectAPI = (data) => POST(`${BASE_URL}/support-subject/updateSupportSubject`, data);
export const GetAllSupportSubjectAPI = (data) => POST(`${BASE_URL}/support-subject/getAllSupportSubject`, data);
export const GetSupportSubjectByIdAPI = (data) => POST(`${BASE_URL}/support-subject/getSupportSubjectById`, data);
export const SoftDeleteSupportSubjectAPI = (data) => POST(`${BASE_URL}/support-subject/softDeleteSupportSubject`, data);
export const HardDeleteSupportSubjectAPI = (data) => POST(`${BASE_URL}/support-subject/hardDeleteSupportSubject`, data);
export const GetAllActiveSupportSubjectAPI = (data) => POST(`${BASE_URL}/support-subject/getAllActiveSupportSub`, data);

//** ------------ Support Request Api-------------   **//
export const UpdateSupportRequestAPI = (data) => POST(`${BASE_URL}/support-request/updateSupportRequest`, data);
export const GetAllSupportRequestAPI = (data) => POST(`${BASE_URL}/support-request/getAllSupportRequest`, data);
export const GetSupportRequestByIdAPI = (data) => POST(`${BASE_URL}/support-request/getSupportRequestById`, data);
export const SoftDeleteSupportRequestAPI = (data) => POST(`${BASE_URL}/support-request/softDeleteSupportRequest`, data);
export const HardDeleteSupportRequestAPI = (data) => POST(`${BASE_URL}/support-request/hardDeleteSupportRequest`, data);

// ------------------------------------- Skills API -------------------------------
export const CreateSkillsAPI = data => POST(`${BASE_URL}/skill/createSkill`, data)
export const getAllSkill = data => POST(`${BASE_URL}/skill/getAllSkill`, data)
export const updateSkillAPI = data => POST(`${BASE_URL}/skill/updateSkill`, data)
export const hardDeleteSkill = data => POST(`${BASE_URL}/skill/hardDeleteSkill`, data)
export const softDeleteSkill = data => POST(`${BASE_URL}/skill/softDeleteSkill`, data)
export const getSkillById = data => POST(`${BASE_URL}/skill/getSkillById`, data)



//** ------------ Sub-Category Api-------------   **//
export const AllSubCategory= (data) => POST(`${BASE_URL}/subCategory/getAllSubCategories` , data);
export const CreateSubCategoryAPI = (data)=> POST(`${BASE_URL}/subCategory/createSubCategory`, data);
export const GetAllActiveCategoriesAPI = (data) => POST(`${BASE_URL}/category/getAllActiveCategories`, data);
export const GetAllSubCategoryAPI = (data) => POST(`${BASE_URL}/subCategory/getAllSubCategories`,data);
export const softDeleteSubCategoryAPI = (data) => POST(`${BASE_URL}/subCategory/softDeleteSubCategory`, data);
export const hardDeleteSubCategoryAPI = (data) => POST(`${BASE_URL}/subCategory/hardDeleteSubCategory`, data )
export const updateSubCategoryAPI = (data) => POST(`${BASE_URL}/subCategory/updateSubCategory`, data )
export const getSubCategoryById = (data) => POST(`${BASE_URL}/subCategory/getSubCategoryById`, data )

//** ------------ Company Api-------------   **//
export const createCompanyAPI = data => POST(`${BASE_URL}/company/createCompany`, data);
export const getAllCompany = data => POST(`${BASE_URL}/company/getAllCompany`, data);
export const updateCompany = data => POST(`${BASE_URL}/company/updateCompany`, data);
export const getCompanyById = data => POST(`${BASE_URL}/company/updateCompany`, data);
export const softDeleteCompanyAPI = data => POST(`${BASE_URL}/company/softDeleteCompany`, data);
export const hardDeleteCompanyAPI = data => POST(`${BASE_URL}/company/hardDeleteCompany`, data);

export const AllDesignationAPI = data => POST(`${BASE_URL}/designation/getAllDesignation`, data)
export const AddDesignationAPI = data => POST(`${BASE_URL}/designation/createDesignation`, data)
export const GetAllActiveDesignationAPI = data => POST(`${BASE_URL}/designation/getAllActiveDesignation`, data)
export const SoftDeletDesignationAPI = data => POST(`${BASE_URL}/designation/softDeleteDesignation`, data)
export const HardDeletDesignationAPI = data => POST(`${BASE_URL}/designation/hardDeleteDesignation`, data)
export const GetDesignationByIdAPI = data => POST(`${BASE_URL}/designation/getDesignationById`, data)
export const UpdateDesignationAPI = data => POST(`${BASE_URL}/designation/updateDesignation`, data);
