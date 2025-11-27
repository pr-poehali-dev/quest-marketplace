import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { Separator } from "@/components/ui/separator";

const MainPage = () => {
  const quests = [
    {
      id: 1,
      title: "Тайна старого особняка",
      slogan: "Раскройте секреты викторианской эпохи",
      description: "Погрузитесь в атмосферу детективного расследования. Вас ждут загадки, тайные комнаты и неожиданные повороты сюжета.",
      price: "2500₽",
      rating: 4.9,
      reviews: 342,
      players: "2-6",
      duration: "60 мин",
      difficulty: "Средний",
      image: "/placeholder.svg",
      city: "Москва",
      tags: ["Детектив", "Мистика", "18+"]
    },
    {
      id: 2,
      title: "Космическая станция",
      slogan: "Спасите человечество от катастрофы",
      description: "Вы — команда космонавтов на орбитальной станции. Системы жизнеобеспечения дают сбой. У вас есть час, чтобы предотвратить катастрофу.",
      price: "3000₽",
      rating: 4.8,
      reviews: 156,
      players: "3-5",
      duration: "75 мин",
      difficulty: "Сложный",
      image: "/placeholder.svg",
      city: "Санкт-Петербург",
      tags: ["Sci-Fi", "Хоррор", "16+"]
    },
    {
      id: 3,
      title: "Ограбление века",
      slogan: "Станьте частью команды профессионалов",
      description: "Идеальный план, профессиональная команда, один шанс. Проникните в хранилище банка и завладейте сокровищем.",
      price: "2800₽",
      rating: 4.7,
      reviews: 289,
      players: "4-8",
      duration: "90 мин",
      difficulty: "Средний",
      image: "/placeholder.svg",
      city: "Казань",
      tags: ["Экшн", "Стратегия", "12+"]
    }
  ];

  return (
    <>
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-transparent" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Найдите свой идеальный квест
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Более 1000 квестов по всей России. Бронируйте онлайн за минуту.
            </p>
            <div className="flex gap-4 max-w-2xl mx-auto">
              <div className="flex-1 relative">
                <Icon name="Search" className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  placeholder="Название квеста или город..."
                  className="pl-10 h-12 text-base"
                />
              </div>
              <Button size="lg" className="px-8 h-12">
                Найти
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-3xl font-bold mb-2">Популярные квесты</h3>
              <p className="text-muted-foreground">Выбор тысяч игроков</p>
            </div>
            <Button variant="outline">
              Все квесты
              <Icon name="ArrowRight" className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {quests.map((quest) => (
              <Card key={quest.id} className="hover-scale overflow-hidden group cursor-pointer">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Icon name="Image" className="h-16 w-16 text-muted-foreground/30" />
                  </div>
                  <Badge className="absolute top-4 right-4 bg-accent">
                    {quest.city}
                  </Badge>
                </div>
                <CardHeader>
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-1 group-hover:text-primary transition-colors">
                        {quest.title}
                      </CardTitle>
                      <CardDescription className="text-sm">
                        {quest.slogan}
                      </CardDescription>
                    </div>
                    <div className="flex items-center gap-1 text-sm font-semibold">
                      <Icon name="Star" className="h-4 w-4 fill-accent text-accent" />
                      {quest.rating}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {quest.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {quest.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Separator className="my-4" />
                  <div className="grid grid-cols-3 gap-2 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Icon name="Users" className="h-4 w-4" />
                      {quest.players}
                    </div>
                    <div className="flex items-center gap-1">
                      <Icon name="Clock" className="h-4 w-4" />
                      {quest.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <Icon name="Target" className="h-4 w-4" />
                      {quest.difficulty}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">
                      {quest.price}
                    </span>
                    <Button>Забронировать</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Почему выбирают нас?</h3>
            <p className="text-muted-foreground">Премиальный сервис для незабываемых впечатлений</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center border-none shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Shield" className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Гарантия качества</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Все квесты проверены нашей командой. Возврат средств, если что-то пошло не так.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center border-none shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Zap" className="h-8 w-8 text-accent" />
                </div>
                <CardTitle>Мгновенное бронирование</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Забронируйте квест за 30 секунд. Оплата онлайн или на месте.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center border-none shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Gift" className="h-8 w-8 text-secondary" />
                </div>
                <CardTitle>Бонусы и кешбэк</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Накапливайте бонусы с каждого квеста и получайте скидки до 20%.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default MainPage;
