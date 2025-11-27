import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="border-t bg-gradient-to-b from-white to-gray-50 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
              QuestMarket
            </h3>
            <p className="text-sm text-muted-foreground">
              Премиальный маркетплейс квестов по всей России
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Для игроков</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Найти квест</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Мои бронирования</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Бонусная программа</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Для организаторов</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Разместить квест</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Тарифы</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Аналитика</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Поддержка</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Помощь</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Контакты</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Блог</a></li>
            </ul>
          </div>
        </div>
        <Separator className="my-8" />
        <div className="flex flex-col md:flex-row items-center justify-between text-sm text-muted-foreground">
          <p>© 2024 QuestMarket. Все права защищены.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-primary transition-colors">Политика конфиденциальности</a>
            <a href="#" className="hover:text-primary transition-colors">Условия использования</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
