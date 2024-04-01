import sql from 'better-sqlite3';

const db = sql('meals.db');

export async function getMeals() {
    await new Promise((resolve) => setTimeout(resolve, 5000));

    // throw new Error('Loading meals failed');
    return db.prepare('SELECT * FROM meals').all(); //all 여러줄의 데이터 불러올때 get 한줄의 데이터 불러올때 run 데이터 주입할때
}