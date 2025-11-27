-- Таблица пользователей
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    full_name VARCHAR(255) NOT NULL,
    phone VARCHAR(50),
    avatar_url TEXT,
    balance_money INTEGER DEFAULT 0,
    balance_bonus INTEGER DEFAULT 0,
    notifications_email BOOLEAN DEFAULT true,
    notifications_sms BOOLEAN DEFAULT true,
    notifications_push BOOLEAN DEFAULT false,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Таблица организаторов
CREATE TABLE organizers (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    company_name VARCHAR(255) NOT NULL,
    contact_phone VARCHAR(50) NOT NULL,
    contact_email VARCHAR(255) NOT NULL,
    balance_money INTEGER DEFAULT 0,
    inn VARCHAR(50),
    card_number VARCHAR(50),
    notifications_email BOOLEAN DEFAULT true,
    notifications_sms BOOLEAN DEFAULT true,
    notifications_daily_report BOOLEAN DEFAULT false,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Таблица квестов
CREATE TABLE quests (
    id SERIAL PRIMARY KEY,
    organizer_id INTEGER REFERENCES organizers(id),
    title VARCHAR(255) NOT NULL,
    slogan VARCHAR(500),
    description TEXT,
    city VARCHAR(100) NOT NULL,
    address TEXT,
    min_players INTEGER NOT NULL,
    max_players INTEGER NOT NULL,
    duration_minutes INTEGER NOT NULL,
    difficulty VARCHAR(50),
    status VARCHAR(50) DEFAULT 'active',
    rating DECIMAL(3,2) DEFAULT 0,
    reviews_count INTEGER DEFAULT 0,
    bookings_count INTEGER DEFAULT 0,
    total_revenue INTEGER DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Таблица тегов квестов
CREATE TABLE quest_tags (
    id SERIAL PRIMARY KEY,
    quest_id INTEGER REFERENCES quests(id),
    tag VARCHAR(100) NOT NULL
);

-- Таблица фото квестов
CREATE TABLE quest_photos (
    id SERIAL PRIMARY KEY,
    quest_id INTEGER REFERENCES quests(id),
    photo_url TEXT NOT NULL,
    is_main BOOLEAN DEFAULT false,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Таблица расписания квестов
CREATE TABLE quest_schedule (
    id SERIAL PRIMARY KEY,
    quest_id INTEGER REFERENCES quests(id),
    date DATE NOT NULL,
    time TIME NOT NULL,
    price INTEGER NOT NULL,
    is_available BOOLEAN DEFAULT true,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Таблица бронирований
CREATE TABLE bookings (
    id SERIAL PRIMARY KEY,
    quest_id INTEGER REFERENCES quests(id),
    user_id INTEGER REFERENCES users(id),
    schedule_id INTEGER REFERENCES quest_schedule(id),
    booking_date DATE NOT NULL,
    booking_time TIME NOT NULL,
    players_count INTEGER NOT NULL,
    total_price INTEGER NOT NULL,
    status VARCHAR(50) DEFAULT 'confirmed',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Таблица отзывов
CREATE TABLE reviews (
    id SERIAL PRIMARY KEY,
    quest_id INTEGER REFERENCES quests(id),
    user_id INTEGER REFERENCES users(id),
    booking_id INTEGER REFERENCES bookings(id),
    rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
    comment TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Таблица транзакций
CREATE TABLE transactions (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    type VARCHAR(50) NOT NULL,
    amount INTEGER NOT NULL,
    description TEXT,
    booking_id INTEGER REFERENCES bookings(id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Таблица сообщений в чатах
CREATE TABLE messages (
    id SERIAL PRIMARY KEY,
    sender_id INTEGER REFERENCES users(id),
    receiver_id INTEGER REFERENCES users(id),
    organizer_id INTEGER REFERENCES organizers(id),
    message TEXT NOT NULL,
    is_read BOOLEAN DEFAULT false,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Индексы для оптимизации
CREATE INDEX idx_quests_city ON quests(city);
CREATE INDEX idx_quests_status ON quests(status);
CREATE INDEX idx_quests_organizer ON quests(organizer_id);
CREATE INDEX idx_bookings_user ON bookings(user_id);
CREATE INDEX idx_bookings_quest ON bookings(quest_id);
CREATE INDEX idx_reviews_quest ON reviews(quest_id);
CREATE INDEX idx_transactions_user ON transactions(user_id);
CREATE INDEX idx_messages_receiver ON messages(receiver_id);
CREATE INDEX idx_messages_sender ON messages(sender_id);
