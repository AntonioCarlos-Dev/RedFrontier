import Check from "../assets/check.svg";
import Button from "./Button";

interface IPricingCardProps {
    name: string;
    description: string;
    price: string;
    period?: string;
    features: string[];
    premium?: boolean;
    badge?: string;
}

export default function PricingCard({ name, description, price, period, features, premium, badge }: IPricingCardProps) {
    return (
        <div className={premium ? "pricing-card premium" : "pricing-card"}>
            {premium && badge && (
                <span className="bonus">
                    <p>{badge}</p>
                </span>
            )}
            <span className="plan">
                <h3>{name}</h3>
                <p>{description}</p>
            </span>
            <span className="price">
                <h2>{price}</h2>
                {period && <p>{period}</p>}
            </span>
            <Button text="Começar agora" secondary={!premium} key={name} />
            <span className="hr" />
            {features.map((feature, index) => (
                <span className="features" key={index}>
                    <img src={Check} alt="ícone check" width={24} height={24} />
                    <p>{feature}</p>
                </span>
            ))}
        </div>
    )
}