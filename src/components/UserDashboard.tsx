import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Icon from "@/components/ui/icon";
import { Separator } from "@/components/ui/separator";

const UserDashboard = () => {
  const userVisitedQuests = [
    { id: 1, title: "Тайна старого особняка", date: "15.11.2024", rating: 5, city: "Москва" },
    { id: 2, title: "Побег из Алькатраса", date: "03.11.2024", rating: 4, city: "Москва" },
    { id: 3, title: "Загадка фараона", date: "22.10.2024", rating: 5, city: "Санкт-Петербург" }
  ];

  return (
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
  );
};

export default UserDashboard;
