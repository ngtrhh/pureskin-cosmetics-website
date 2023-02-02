const categories = [
    {
        id:1,
        display: "Deal Sốc",
        categorySlug: "deal-soc"
    },
    {
        id:2,
        display: "Dưỡng da",
        categorySlug: "duong-da"
    },
    {
        id:3,
        display: "Trang điểm",
        categorySlug: "trang-diem"
    },
    {
        id:4,
        display: "Chăm sóc tóc",
        categorySlug: "cham-soc-toc"
    },
    {
        id:5,
        display: "Chăm sóc cơ thể",
        categorySlug: "cham-soc-co-the"
    },
    {
        id:6,
        display: "Khác",
        categorySlug: "khac"
    }
]
const getAllCategories = () => categories
const getCategoryBySlug = (slug) => categories.filter(e => e.categorySlug === slug)
const categoryList = {
    getCategoryBySlug,getAllCategories
}

export default categoryList