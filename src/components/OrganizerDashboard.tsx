import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Icon from "@/components/ui/icon";
import { Separator } from "@/components/ui/separator";

const OrganizerDashboard = () => {
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
  );
};

export default OrganizerDashboard;
