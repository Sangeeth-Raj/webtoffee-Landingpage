import styled from "styled-components";
import Heading from "../Heading";
import WordpressCard from "../WordpressCard";

export default function OtherPlugins() {
    return (
        <Container className="background">
            <Wrapper className="wrapper">
                <Heading
                    lefttitle="You may also like "
                    midtitle="these plugins"
                />
                <div className="otherPluginCards">
                    <WordpressCard
                        title="WooCommerce PDF invoices, packing slips and credit notes"
                        description="Customize, auto-generate, and print WooCommerce PDF invoices, packing slips, and credit notes using a single plugin. You can send these documents to customers by attaching them to the order emails."
                        image="/icons/OtherPluginIcon-1.svg"
                        other={true}
                    />
                    <WordpressCard
                        title="Smart Coupons for WooCommerce"
                        description="Create coupons to offer discounts and free products to your customers with Smart Coupons for WooCommerce. You can set up BOGO coupons, giveaways, gift cards, store credits, and more with this plugin."
                        image="/icons/OtherPluginIcon-2.svg"
                        other={true}
                    />
                    <WordpressCard
                        title="Product Import Export Plugin For WooCommerce"
                        description="Seamlessly import/export your WooCommerce products including simple, variable, custom products and subscriptions. You may also import and export product images, tags, categories, reviews, and ratings."
                        image="/icons/OtherPluginIcon-3.svg"
                        other={true}
                    />
                    <WordpressCard
                        title="WooCommerce PDF invoices, packing slips and credit notes"
                        description="Customize, auto-generate, and print WooCommerce PDF invoices, packing slips, and credit notes using a single plugin. You can send these documents to customers by attaching them to the order emails."
                        image="/icons/OtherPluginIcon-4.svg"
                        other={true}
                    />
                </div>
            </Wrapper>
        </Container>
    );
}

const Container = styled.div`
    padding-top: 100px;
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    .otherPluginCards {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 50px 32px;
        margin-top: 100px;
    }
`;
