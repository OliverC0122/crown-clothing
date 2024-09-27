import i18next from "i18next";
import { initReactI18next } from "react-i18next";

i18next
    .use(initReactI18next)
    .init({
        debug: true,
        fallbackLng: "en",
        resources: {
            en: {
                translation: {
                    "Submit": "Submit",
                    "Welcome": "Welcome. We are here to help.",
                    "Contact Us": "Contact Us",
                    "name": "Name",
                    "email": "Email",
                    "Phone": "Phone",
                    "Products": "Products",
                    "Product": "Product",
                    "Support": "Support",
                    "New Product": "New Product",
                    "Sign Out": "Sign Out",
                    "Sign In": "Sign In",
                    "Message": "Message",
                    "Sign in header": "Already have an account?",
                    "Sign In Prompt": "Sign in with your Username and password",
                    "Sign up header": "Don't have an account?",
                    "Sign Up Prompt": "Sign up with your Username and password",
                    "Username": "Username",
                    "Password": "Password",
                    "Confirm Password": "Confirm Password",
                    "Sign Up": "Sign Up",
                    "FAQ": "FAQ",
                    "Go to Checkout": "GO TO CHECKOUT",
                    "Description": "Description",
                    "Quantity": "Quantity",
                    "Price": "Price",
                    "Remove": "Remove",
                    "Total": "Total",
                    "Credit Card Payment": "Credit Card Payment",
                    "Pay now": "Pay now",
                    "Add to Cart": "Add to Cart",
                    "shop now": "Shop Now",
                    "Hats": "Hats",
                    "Sneakers": "Sneakers",
                    "Jackets": "Jackets",
                    "Men's": "Men's",
                    "Women's": "Women's",
                    "Payment Successful!": "Payment Successful!",
                    "Thank you for your purchase.": "Thank you for your purchase.",
                }
            },
            fr: {
                translation: {
                    "Submit": "Soumettre",
                    "Welcome": "Bienvenue. Nous sommes là pour aider.",
                    "Contact Us": "Nous contacter",
                    "name": "Nom",
                    "email": "Email",
                    "Phone": "Téléphone",
                    "Products": "Produits",
                    "Product": "Produit",
                    "Support": "Soutien",
                    "New Product": "Nouveau produit",
                    "Sign Out": "Se déconnecter",
                    "Sign In": "Se connecter",
                    "Message": "Message",
                    "Sign in header": "Vous avez déjà un compte?",
                    "Sign In Prompt": "Connectez-vous avec votre nom d'utilisateur et votre mot de passe",
                    "Sign up header": "Vous n'avez pas de compte?",
                    "Sign Up Prompt": "Inscrivez-vous avec votre nom d'utilisateur et votre mot de passe",
                    "Username": "Nom d'utilisateur",
                    "Password": "Mot de passe",
                    "Confirm Password": "Confirmez le mot de passe",
                    "Sign Up": "S'inscrire",
                    "FAQ": "FAQ",
                    "Go to Checkout": "ALLER À LA CAISSE",
                    "Description": "La description",
                    "Quantity": "Quantité",
                    "Price": "Prix",
                    "Remove": "Retirer",
                    "Total": "Total",
                    "Credit Card Payment": "Carte de crédit",
                    "Pay now": "Payer maintenant",
                    "Add to Cart": "Ajouter au panier",
                    "shop now": "Acheter maintenant",
                    "Hats": "Chapeaux",
                    "Sneakers": "Baskets",
                    "Jackets": "Vestes",
                    "Men's": "Hommes",
                    "Women's": "Femmes",
                    "Payment Successful!": "Paiement réussi!",
                    "Thank you for your purchase.": "Merci pour votre achat.",

                }
            },
            zh: {
                translation: {
                    "Submit": "提交",
                    "Welcome": "欢迎，很高兴为您服务。",
                    "Contact Us": "联系我们",
                    "name": "姓名",
                    "email": "电子邮件",
                    "Phone": "电话",
                    "Products": "产品",
                    "Product": "产品",
                    "Support": "支持",
                    "New Product": "添加新产品",
                    "Sign Out": "退出",
                    "Sign In": "登录",
                    "Message": "信息",
                    "Sign in header": "已经有一个账户？",
                    "Sign In Prompt": "使用您的用户名和密码登录",
                    "Sign up header": "还没有账户？",
                    "Sign Up Prompt": "使用您的用户名和密码注册",
                    "Username": "用户名",
                    "Password": "密码",
                    "Confirm Password": "确认密码",
                    "Sign Up": "注册",
                    "FAQ": "常见问题解答",
                    "Go to Checkout": "我的订单",
                    "Description": "产品描述",
                    "Quantity": "数量",
                    "Price": "价格",
                    "Remove": "删除",
                    "Total": "总计",
                    "Credit Card Payment": "信用卡支付",
                    "Pay now": "立即付款",
                    "Add to Cart": "添加到购物车",
                    "shop now": "即刻选购",
                    "Hats": "帽子",
                    "Sneakers": "运动鞋",
                    "Jackets": "夹克",
                    "Men's": "男装",
                    "Women's": "女装",
                    "Payment Successful!": "付款成功！",
                    "Thank you for your purchase.": "欢迎再次光临",
                }
            }
        },
        interpolation: {
            escapeValue: false
        }
    });

export default i18next;


