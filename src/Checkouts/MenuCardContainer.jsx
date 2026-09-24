import MenuCard from './MenuCard';
import '../Homepage/SignatureBowls.css'

export default function MenuCardContainer({data, head}) {
  const { bowls } = data;

  const handleOrder = (title) => {
    console.log(`Order clicked for: ${title}`);
  };

  return (
    <div>

    <section className="bowls-section">
        <div>
            <h1 style={{
                fontSize: '24px',
                fontWeight: '700',
                marginBottom:'40px'
            }}>{head}</h1>
            <div className="bowls-container">
                <div className="bowls-grid">
                {bowls.map((bowl) => (
                    <MenuCard
                    key={bowl.id}
                    title={bowl.title}
                    ingredients={bowl.ingredients}
                    image={bowl.image}
                    onOrder={() => handleOrder(bowl.title)}
                    price={bowl.price}
                    />
                ))}
                </div>

            </div>
        </div>
    </section>
    </div>
  );
}