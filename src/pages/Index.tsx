import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Icon from "@/components/ui/icon";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  const [activeView, setActiveView] = useState<"main" | "user" | "organizer">("main");

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

  const userVisitedQuests = [
    { id: 1, title: "Тайна старого особняка", date: "15.11.2024", rating: 5, city: "Москва" },
    { id: 2, title: "Побег из Алькатраса", date: "03.11.2024", rating: 4, city: "Москва" },
    { id: 3, title: "Загадка фараона", date: "22.10.2024", rating: 5, city: "Санкт-Петербург" }
  ];

  const organizerQuests = [
    {
      id: 1,
      title: "Тайна старого особняка",
      status: "active",
      bookings: 45,
      revenue: "112500₽",
      rating: 4.9
    },
    {
      id: 2,
      title: "Побег из тюрьмы",
      status: "disabled",
      bookings: 0,
      revenue: "0₽",
      rating: 4.6
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
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

      {activeView === "main" && (
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
      )}

      {activeView === "user" && (
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <Avatar className="h-20 w-20">
                <AvatarFallback className="bg-primary text-primary-foreground text-2xl">
                  АС
                </AvatarFallback>
              </Avatar>
              <div>
                <h2 className="text-3xl font-bold">Александр Смирнов</h2>
                <p className="text-muted-foreground">alex.smirnov@example.com</p>
              </div>
            </div>

            <Tabs defaultValue="history" className="space-y-6">
              <TabsList className="grid w-full grid-cols-5">
                <TabsTrigger value="history">
                  <Icon name="History" className="h-4 w-4 mr-2" />
                  История
                </TabsTrigger>
                <TabsTrigger value="balance">
                  <Icon name="Wallet" className="h-4 w-4 mr-2" />
                  Баланс
                </TabsTrigger>
                <TabsTrigger value="payments">
                  <Icon name="CreditCard" className="h-4 w-4 mr-2" />
                  Платежи
                </TabsTrigger>
                <TabsTrigger value="settings">
                  <Icon name="Settings" className="h-4 w-4 mr-2" />
                  Настройки
                </TabsTrigger>
                <TabsTrigger value="chat">
                  <Icon name="MessageSquare" className="h-4 w-4 mr-2" />
                  Чаты
                </TabsTrigger>
              </TabsList>

              <TabsContent value="history" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>История посещенных квестов</CardTitle>
                    <CardDescription>Всего пройдено квестов: {userVisitedQuests.length}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {userVisitedQuests.map((quest) => (
                        <div key={quest.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                          <div className="flex-1">
                            <h4 className="font-semibold">{quest.title}</h4>
                            <div className="flex items-center gap-4 mt-1 text-sm text-muted-foreground">
                              <span className="flex items-center gap-1">
                                <Icon name="MapPin" className="h-3 w-3" />
                                {quest.city}
                              </span>
                              <span className="flex items-center gap-1">
                                <Icon name="Calendar" className="h-3 w-3" />
                                {quest.date}
                              </span>
                            </div>
                          </div>
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1">
                              {[...Array(quest.rating)].map((_, i) => (
                                <Icon key={i} name="Star" className="h-4 w-4 fill-accent text-accent" />
                              ))}
                            </div>
                            <Button variant="outline" size="sm">
                              Оставить отзыв
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="balance" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="bg-gradient-to-br from-primary to-secondary text-primary-foreground">
                    <CardHeader>
                      <CardTitle className="text-white">Основной баланс</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-4xl font-bold text-white mb-4">3 250₽</div>
                      <Button variant="secondary" className="w-full">
                        <Icon name="Plus" className="h-4 w-4 mr-2" />
                        Пополнить баланс
                      </Button>
                    </CardContent>
                  </Card>
                  <Card className="bg-gradient-to-br from-accent to-yellow-500 text-white">
                    <CardHeader>
                      <CardTitle className="text-white">Бонусы</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-4xl font-bold mb-4">1 420₽</div>
                      <Button variant="secondary" className="w-full">
                        <Icon name="Gift" className="h-4 w-4 mr-2" />
                        Использовать бонусы
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="payments">
                <Card>
                  <CardHeader>
                    <CardTitle>История транзакций</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        { id: 1, type: "payment", amount: "-2500₽", description: "Квест 'Тайна особняка'", date: "15.11.2024" },
                        { id: 2, type: "refund", amount: "+500₽", description: "Возврат бонусов", date: "10.11.2024" },
                        { id: 3, type: "topup", amount: "+5000₽", description: "Пополнение баланса", date: "05.11.2024" }
                      ].map((transaction) => (
                        <div key={transaction.id} className="flex items-center justify-between p-4 border rounded-lg">
                          <div className="flex items-center gap-4">
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                              transaction.type === "payment" ? "bg-red-100" :
                              transaction.type === "refund" ? "bg-blue-100" : "bg-green-100"
                            }`}>
                              <Icon
                                name={transaction.type === "payment" ? "ArrowDown" : "ArrowUp"}
                                className={`h-5 w-5 ${
                                  transaction.type === "payment" ? "text-red-600" :
                                  transaction.type === "refund" ? "text-blue-600" : "text-green-600"
                                }`}
                              />
                            </div>
                            <div>
                              <div className="font-semibold">{transaction.description}</div>
                              <div className="text-sm text-muted-foreground">{transaction.date}</div>
                            </div>
                          </div>
                          <div className={`font-bold ${
                            transaction.amount.startsWith("-") ? "text-red-600" : "text-green-600"
                          }`}>
                            {transaction.amount}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="settings">
                <Card>
                  <CardHeader>
                    <CardTitle>Настройки профиля</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">ФИО</label>
                        <Input defaultValue="Александр Смирнов" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Email</label>
                        <Input type="email" defaultValue="alex.smirnov@example.com" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Телефон</label>
                        <Input type="tel" defaultValue="+7 (999) 123-45-67" />
                      </div>
                      <Separator />
                      <div className="space-y-2">
                        <h4 className="font-semibold">Уведомления</h4>
                        <div className="space-y-3">
                          <label className="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" defaultChecked className="w-4 h-4" />
                            <span className="text-sm">Email-рассылка о новых квестах</span>
                          </label>
                          <label className="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" defaultChecked className="w-4 h-4" />
                            <span className="text-sm">SMS-напоминания о бронированиях</span>
                          </label>
                          <label className="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" className="w-4 h-4" />
                            <span className="text-sm">Push-уведомления о скидках</span>
                          </label>
                        </div>
                      </div>
                    </div>
                    <Button className="w-full">Сохранить изменения</Button>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="chat">
                <Card>
                  <CardHeader>
                    <CardTitle>Чаты с организаторами</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        { id: 1, organizer: "Квесты Москвы", lastMessage: "Спасибо за визит!", time: "10:30", unread: 0 },
                        { id: 2, organizer: "Escape Room SPB", lastMessage: "Да, можем перенести на 18:00", time: "Вчера", unread: 2 }
                      ].map((chat) => (
                        <div key={chat.id} className="flex items-center gap-4 p-4 border rounded-lg hover:bg-muted/50 transition-colors cursor-pointer">
                          <Avatar>
                            <AvatarFallback>{chat.organizer[0]}</AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <h4 className="font-semibold">{chat.organizer}</h4>
                              <span className="text-xs text-muted-foreground">{chat.time}</span>
                            </div>
                            <p className="text-sm text-muted-foreground">{chat.lastMessage}</p>
                          </div>
                          {chat.unread > 0 && (
                            <Badge variant="default" className="bg-accent">
                              {chat.unread}
                            </Badge>
                          )}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      )}

      {activeView === "organizer" && (
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl font-bold mb-2">Кабинет организатора</h2>
                <p className="text-muted-foreground">Управляйте своими квестами</p>
              </div>
              <Button size="lg">
                <Icon name="Plus" className="h-5 w-5 mr-2" />
                Создать квест
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Общий доход</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-green-600">284 500₽</div>
                  <p className="text-xs text-muted-foreground mt-1">За последние 30 дней</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Активные квесты</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">5</div>
                  <p className="text-xs text-muted-foreground mt-1">2 отключено</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Средний рейтинг</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold flex items-center gap-2">
                    4.8
                    <Icon name="Star" className="h-6 w-6 fill-accent text-accent" />
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">Из 156 отзывов</p>
                </CardContent>
              </Card>
            </div>

            <Tabs defaultValue="quests" className="space-y-6">
              <TabsList>
                <TabsTrigger value="quests">Мои квесты</TabsTrigger>
                <TabsTrigger value="bookings">Бронирования</TabsTrigger>
                <TabsTrigger value="finance">Финансы</TabsTrigger>
                <TabsTrigger value="chat">Чаты</TabsTrigger>
                <TabsTrigger value="settings">Настройки</TabsTrigger>
              </TabsList>

              <TabsContent value="quests" className="space-y-4">
                {organizerQuests.map((quest) => (
                  <Card key={quest.id}>
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-xl font-semibold">{quest.title}</h3>
                            <Badge variant={quest.status === "active" ? "default" : "secondary"}>
                              {quest.status === "active" ? "Активен" : "Отключен"}
                            </Badge>
                          </div>
                          <div className="grid grid-cols-3 gap-4 mt-4">
                            <div>
                              <p className="text-sm text-muted-foreground">Бронирований</p>
                              <p className="text-2xl font-bold">{quest.bookings}</p>
                            </div>
                            <div>
                              <p className="text-sm text-muted-foreground">Выручка</p>
                              <p className="text-2xl font-bold text-green-600">{quest.revenue}</p>
                            </div>
                            <div>
                              <p className="text-sm text-muted-foreground">Рейтинг</p>
                              <p className="text-2xl font-bold flex items-center gap-1">
                                {quest.rating}
                                <Icon name="Star" className="h-5 w-5 fill-accent text-accent" />
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            <Icon name="Edit" className="h-4 w-4 mr-2" />
                            Редактировать
                          </Button>
                          <Button variant="outline" size="sm">
                            <Icon name="Calendar" className="h-4 w-4 mr-2" />
                            Расписание
                          </Button>
                          <Button variant="outline" size="sm">
                            <Icon name="MoreVertical" className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="bookings">
                <Card>
                  <CardHeader>
                    <CardTitle>Предстоящие бронирования</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        { id: 1, quest: "Тайна старого особняка", date: "27.11.2024", time: "18:00", players: 4, customer: "Иван П.", phone: "+7 (999) 123-45-67" },
                        { id: 2, quest: "Тайна старого особняка", date: "28.11.2024", time: "20:00", players: 6, customer: "Мария С.", phone: "+7 (999) 987-65-43" }
                      ].map((booking) => (
                        <div key={booking.id} className="flex items-center justify-between p-4 border rounded-lg">
                          <div className="flex-1">
                            <h4 className="font-semibold">{booking.quest}</h4>
                            <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                              <span className="flex items-center gap-1">
                                <Icon name="Calendar" className="h-4 w-4" />
                                {booking.date} в {booking.time}
                              </span>
                              <span className="flex items-center gap-1">
                                <Icon name="Users" className="h-4 w-4" />
                                {booking.players} чел.
                              </span>
                              <span className="flex items-center gap-1">
                                <Icon name="User" className="h-4 w-4" />
                                {booking.customer}
                              </span>
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm">
                              <Icon name="Phone" className="h-4 w-4 mr-2" />
                              Позвонить
                            </Button>
                            <Button variant="outline" size="sm">
                              <Icon name="MessageSquare" className="h-4 w-4 mr-2" />
                              Написать
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="finance">
                <Card>
                  <CardHeader>
                    <CardTitle>Финансы и выплаты</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200">
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <p className="text-sm text-muted-foreground">Доступно к выводу</p>
                            <p className="text-4xl font-bold text-green-600">112 450₽</p>
                          </div>
                          <Button>
                            <Icon name="Download" className="h-4 w-4 mr-2" />
                            Вывести средства
                          </Button>
                        </div>
                      </div>
                      <Separator />
                      <div>
                        <h4 className="font-semibold mb-4">Настройки выплат</h4>
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <label className="text-sm font-medium">Банковская карта</label>
                            <Input placeholder="0000 0000 0000 0000" />
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-medium">ИНН</label>
                            <Input placeholder="123456789012" />
                          </div>
                          <Button variant="outline" className="w-full">
                            Сохранить реквизиты
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="chat">
                <Card>
                  <CardHeader>
                    <CardTitle>Чаты с клиентами</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        { id: 1, customer: "Иван Петров", lastMessage: "Во сколько можно прийти?", time: "15 мин назад", unread: 1 },
                        { id: 2, customer: "Мария Смирнова", lastMessage: "Спасибо, было отлично!", time: "2 часа назад", unread: 0 }
                      ].map((chat) => (
                        <div key={chat.id} className="flex items-center gap-4 p-4 border rounded-lg hover:bg-muted/50 transition-colors cursor-pointer">
                          <Avatar>
                            <AvatarFallback>{chat.customer[0]}</AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <h4 className="font-semibold">{chat.customer}</h4>
                              <span className="text-xs text-muted-foreground">{chat.time}</span>
                            </div>
                            <p className="text-sm text-muted-foreground">{chat.lastMessage}</p>
                          </div>
                          {chat.unread > 0 && (
                            <Badge variant="default" className="bg-accent">
                              {chat.unread}
                            </Badge>
                          )}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="settings">
                <Card>
                  <CardHeader>
                    <CardTitle>Настройки организатора</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Название компании</label>
                        <Input defaultValue="Квест-студия 'Загадка'" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Контактный телефон</label>
                        <Input type="tel" defaultValue="+7 (495) 123-45-67" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Email для уведомлений</label>
                        <Input type="email" defaultValue="info@quest-zagadka.ru" />
                      </div>
                      <Separator />
                      <div className="space-y-2">
                        <h4 className="font-semibold">Уведомления</h4>
                        <div className="space-y-3">
                          <label className="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" defaultChecked className="w-4 h-4" />
                            <span className="text-sm">Email о новых бронированиях</span>
                          </label>
                          <label className="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" defaultChecked className="w-4 h-4" />
                            <span className="text-sm">SMS-напоминания за час до сеанса</span>
                          </label>
                          <label className="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" className="w-4 h-4" />
                            <span className="text-sm">Ежедневный отчет о выручке</span>
                          </label>
                        </div>
                      </div>
                    </div>
                    <Button className="w-full">Сохранить настройки</Button>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      )}

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
    </div>
  );
};

export default Index;
