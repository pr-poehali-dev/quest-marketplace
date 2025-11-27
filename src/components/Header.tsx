import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface HeaderProps {
  activeView: "main" | "user" | "organizer";
  setActiveView: (view: "main" | "user" | "organizer") => void;
}

const Header = ({ activeView, setActiveView }: HeaderProps) => {
  return (
    <header className="border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              QuestMarket
            </h1>
            <nav className="hidden md:flex gap-6">
              <Button
                variant="ghost"
                onClick={() => setActiveView("main")}
                className={activeView === "main" ? "text-primary" : ""}
              >
                Главная
              </Button>
              <Button variant="ghost">Каталог</Button>
              <Button variant="ghost">О платформе</Button>
              <Button variant="ghost">Помощь</Button>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              onClick={() => setActiveView("user")}
              className={activeView === "user" ? "border-primary" : ""}
            >
              <Icon name="User" className="mr-2 h-4 w-4" />
              Личный кабинет
            </Button>
            <Button
              onClick={() => setActiveView("organizer")}
              className={activeView === "organizer" ? "bg-secondary" : ""}
            >
              <Icon name="Building2" className="mr-2 h-4 w-4" />
              Для организаторов
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
