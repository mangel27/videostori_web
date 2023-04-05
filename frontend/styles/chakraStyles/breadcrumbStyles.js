export const breadcrumbStyle = {
    Breadcrumb: {
         parts: ["root", "link", "separator", "list", "item"],
        baseStyle: {
            root: {
                fontFamily: "Roboto, serif",

            },
            item: {
 _active: {
                textDecor:"underline"
                }
            },
            link: {
                fontFamily: "Roboto, serif",
                fontSize: ['16px', '16px', '18px', '18px'],
                fontWeight: 500,
                lineHeight: '24px',
                _active: {
                textDecor:"underline"
                }
            }
        }
    }
}