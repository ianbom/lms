<?php

namespace Database\Seeders;

use App\Models\Classes;
use App\Models\ClassMentor;
use App\Models\Mentor;
use App\Models\Module;
use App\Models\Quiz;
use App\Models\QuizOption;
use App\Models\QuizQuestion;
use App\Models\User;
use App\Models\Video;
use App\Models\VideoResource;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class ClassSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $admin = User::where('role', 'admin')->first();

        if (!$admin) {
            $admin = User::first();
        }

        $mentors = Mentor::all();

        // =====================================================
        // CLASS 1: Leadership & Management Excellence
        // =====================================================
        $class1 = Classes::create([
            'created_by' => $admin->id,
            'category_id' => 3, // Business
            'title' => 'Leadership & Management Excellence',
            'slug' => Str::slug('Leadership & Management Excellence'),
            'description' => 'Program komprehensif untuk mengembangkan kemampuan kepemimpinan dan manajemen tim yang efektif. Pelajari strategi memimpin dengan percaya diri, memotivasi tim, dan mencapai target organisasi.',
            'price' => 500000,
            'discount' => 20,
            'price_final' => 400000,
            'thumbnail_url' => 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800',
            'status' => 'published',
            'published_at' => now(),
        ]);

        // Attach mentors to class 1
        if ($mentors->count() >= 2) {
            ClassMentor::create(['class_id' => $class1->id, 'mentor_id' => $mentors[3]->id, 'sort_order' => 1]);
            ClassMentor::create(['class_id' => $class1->id, 'mentor_id' => $mentors[4]->id, 'sort_order' => 2]);
        }

        // Module 1.1: Fundamentals of Leadership
        $module1_1 = Module::create([
            'class_id' => $class1->id,
            'title' => 'Dasar-Dasar Kepemimpinan',
            'description' => 'Memahami konsep fundamental kepemimpinan dan perbedaan antara pemimpin dan manajer.',
            'sort_order' => 1,
            'is_active' => true,
        ]);

        Video::create([
            'module_id' => $module1_1->id,
            'title' => 'Apa Itu Kepemimpinan?',
            'description' => 'Pengenalan konsep kepemimpinan dan peran pentingnya dalam organisasi modern.',
            'youtube_url' => 'https://www.youtube.com/watch?v=-W1mAr0lZck',
            'duration_sec' => 720,
            'sort_order' => 1,
            'is_preview' => true,
        ]);

        Video::create([
            'module_id' => $module1_1->id,
            'title' => 'Perbedaan Leader vs Manager',
            'description' => 'Memahami perbedaan mendasar antara pemimpin dan manajer serta kapan harus menerapkan masing-masing peran.',
            'youtube_url' => 'https://www.youtube.com/watch?v=-W1mAr0lZck',
            'duration_sec' => 900,
            'sort_order' => 2,
            'is_preview' => false,
        ]);

        $quiz1_1 = Quiz::create([
            'module_id' => $module1_1->id,
            'title' => 'Quiz: Dasar-Dasar Kepemimpinan',
            'sort_order' => 1,
            'is_pretest' => false,
        ]);

        $this->createLeadershipQuiz1Questions($quiz1_1);

        // Module 1.2: Communication Skills for Leaders
        $module1_2 = Module::create([
            'class_id' => $class1->id,
            'title' => 'Keterampilan Komunikasi untuk Pemimpin',
            'description' => 'Menguasai teknik komunikasi efektif untuk memimpin dan mempengaruhi tim.',
            'sort_order' => 2,
            'is_active' => true,
        ]);

        Video::create([
            'module_id' => $module1_2->id,
            'title' => 'Komunikasi Efektif dalam Tim',
            'description' => 'Strategi berkomunikasi dengan jelas dan persuasif kepada tim.',
            'youtube_url' => 'https://www.youtube.com/watch?v=-W1mAr0lZck',
            'duration_sec' => 840,
            'sort_order' => 1,
            'is_preview' => false,
        ]);

        Video::create([
            'module_id' => $module1_2->id,
            'title' => 'Memberikan Feedback yang Konstruktif',
            'description' => 'Cara memberikan umpan balik yang membangun tanpa merusak motivasi tim.',
            'youtube_url' => 'https://www.youtube.com/watch?v=-W1mAr0lZck',
            'duration_sec' => 780,
            'sort_order' => 2,
            'is_preview' => false,
        ]);

        $quiz1_2 = Quiz::create([
            'module_id' => $module1_2->id,
            'title' => 'Quiz: Keterampilan Komunikasi',
            'sort_order' => 1,
            'is_pretest' => false,
        ]);

        $this->createCommunicationQuizQuestions($quiz1_2);

        // Module 1.3: Strategic Decision Making
        $module1_3 = Module::create([
            'class_id' => $class1->id,
            'title' => 'Pengambilan Keputusan Strategis',
            'description' => 'Framework dan teknik untuk membuat keputusan yang tepat dalam situasi kompleks.',
            'sort_order' => 3,
            'is_active' => true,
        ]);

        Video::create([
            'module_id' => $module1_3->id,
            'title' => 'Framework Pengambilan Keputusan',
            'description' => 'Mengenal berbagai model dan framework untuk pengambilan keputusan.',
            'youtube_url' => 'https://www.youtube.com/watch?v=-W1mAr0lZck',
            'duration_sec' => 960,
            'sort_order' => 1,
            'is_preview' => false,
        ]);

        Video::create([
            'module_id' => $module1_3->id,
            'title' => 'Mengelola Risiko dalam Keputusan Bisnis',
            'description' => 'Cara mengidentifikasi dan memitigasi risiko dalam setiap keputusan strategis.',
            'youtube_url' => 'https://www.youtube.com/watch?v=-W1mAr0lZck',
            'duration_sec' => 1020,
            'sort_order' => 2,
            'is_preview' => false,
        ]);

        $quiz1_3 = Quiz::create([
            'module_id' => $module1_3->id,
            'title' => 'Quiz: Pengambilan Keputusan Strategis',
            'sort_order' => 1,
            'is_pretest' => false,
        ]);

        $this->createDecisionMakingQuizQuestions($quiz1_3);

        // =====================================================
        // CLASS 2: Effective Communication & Presentation Skills
        // =====================================================
        $class2 = Classes::create([
            'created_by' => $admin->id,
            'category_id' => 6, // Personal Development
            'title' => 'Effective Communication & Presentation Skills',
            'slug' => Str::slug('Effective Communication & Presentation Skills'),
            'description' => 'Kuasai seni berkomunikasi dan presentasi yang memukau. Dari public speaking hingga negosiasi bisnis, tingkatkan kemampuan Anda untuk menyampaikan ide dengan percaya diri.',
            'price' => 350000,
            'discount' => 15,
            'price_final' => 297500,
            'thumbnail_url' => 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800',
            'status' => 'published',
            'published_at' => now(),
        ]);

        // Attach mentors to class 2
        if ($mentors->count() >= 2) {
            ClassMentor::create(['class_id' => $class2->id, 'mentor_id' => $mentors[2]->id, 'sort_order' => 1]);
            ClassMentor::create(['class_id' => $class2->id, 'mentor_id' => $mentors[0]->id, 'sort_order' => 2]);
        }

        // Module 2.1: Public Speaking Fundamentals
        $module2_1 = Module::create([
            'class_id' => $class2->id,
            'title' => 'Dasar-Dasar Public Speaking',
            'description' => 'Mengatasi rasa takut berbicara di depan umum dan membangun kepercayaan diri.',
            'sort_order' => 1,
            'is_active' => true,
        ]);

        Video::create([
            'module_id' => $module2_1->id,
            'title' => 'Mengatasi Demam Panggung',
            'description' => 'Teknik praktis untuk mengatasi kecemasan sebelum dan saat presentasi.',
            'youtube_url' => 'https://www.youtube.com/watch?v=-W1mAr0lZck',
            'duration_sec' => 660,
            'sort_order' => 1,
            'is_preview' => true,
        ]);

        Video::create([
            'module_id' => $module2_1->id,
            'title' => 'Membangun Kepercayaan Diri',
            'description' => 'Strategi membangun mindset dan body language yang memancarkan kepercayaan diri.',
            'youtube_url' => 'https://www.youtube.com/watch?v=-W1mAr0lZck',
            'duration_sec' => 720,
            'sort_order' => 2,
            'is_preview' => false,
        ]);

        $quiz2_1 = Quiz::create([
            'module_id' => $module2_1->id,
            'title' => 'Quiz: Dasar-Dasar Public Speaking',
            'sort_order' => 1,
            'is_pretest' => false,
        ]);

        $this->createPublicSpeakingQuizQuestions($quiz2_1);

        // Module 2.2: Presentation Design & Delivery
        $module2_2 = Module::create([
            'class_id' => $class2->id,
            'title' => 'Desain & Penyampaian Presentasi',
            'description' => 'Membuat slide yang menarik dan menyampaikan presentasi yang berkesan.',
            'sort_order' => 2,
            'is_active' => true,
        ]);

        Video::create([
            'module_id' => $module2_2->id,
            'title' => 'Prinsip Desain Slide yang Efektif',
            'description' => 'Cara membuat slide presentasi yang visual, simpel, dan impactful.',
            'youtube_url' => 'https://www.youtube.com/watch?v=-W1mAr0lZck',
            'duration_sec' => 900,
            'sort_order' => 1,
            'is_preview' => false,
        ]);

        Video::create([
            'module_id' => $module2_2->id,
            'title' => 'Teknik Storytelling dalam Presentasi',
            'description' => 'Menggunakan storytelling untuk membuat presentasi lebih menarik dan mudah diingat.',
            'youtube_url' => 'https://www.youtube.com/watch?v=-W1mAr0lZck',
            'duration_sec' => 840,
            'sort_order' => 2,
            'is_preview' => false,
        ]);

        $quiz2_2 = Quiz::create([
            'module_id' => $module2_2->id,
            'title' => 'Quiz: Desain & Penyampaian Presentasi',
            'sort_order' => 1,
            'is_pretest' => false,
        ]);

        $this->createPresentationQuizQuestions($quiz2_2);

        // Module 2.3: Business Negotiation
        $module2_3 = Module::create([
            'class_id' => $class2->id,
            'title' => 'Negosiasi Bisnis',
            'description' => 'Teknik negosiasi untuk mencapai kesepakatan win-win dalam konteks profesional.',
            'sort_order' => 3,
            'is_active' => true,
        ]);

        Video::create([
            'module_id' => $module2_3->id,
            'title' => 'Prinsip Dasar Negosiasi',
            'description' => 'Memahami konsep BATNA, ZOPA, dan strategi negosiasi efektif.',
            'youtube_url' => 'https://www.youtube.com/watch?v=-W1mAr0lZck',
            'duration_sec' => 1080,
            'sort_order' => 1,
            'is_preview' => false,
        ]);

        Video::create([
            'module_id' => $module2_3->id,
            'title' => 'Menangani Situasi Negosiasi yang Sulit',
            'description' => 'Cara menghadapi deadlock dan pihak yang sulit dalam negosiasi.',
            'youtube_url' => 'https://www.youtube.com/watch?v=-W1mAr0lZck',
            'duration_sec' => 960,
            'sort_order' => 2,
            'is_preview' => false,
        ]);

        $quiz2_3 = Quiz::create([
            'module_id' => $module2_3->id,
            'title' => 'Quiz: Negosiasi Bisnis',
            'sort_order' => 1,
            'is_pretest' => false,
        ]);

        $this->createNegotiationQuizQuestions($quiz2_3);

        // =====================================================
        // CLASS 3: Project Management Professional
        // =====================================================
        $class3 = Classes::create([
            'created_by' => $admin->id,
            'category_id' => 3, // Business
            'title' => 'Project Management Professional',
            'slug' => Str::slug('Project Management Professional'),
            'description' => 'Pelajari metodologi manajemen proyek modern termasuk Agile, Scrum, dan Waterfall. Kembangkan kemampuan untuk merencanakan, mengeksekusi, dan menyelesaikan proyek tepat waktu dan sesuai anggaran.',
            'price' => 750000,
            'discount' => 10,
            'price_final' => 675000,
            'thumbnail_url' => 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800',
            'status' => 'published',
            'published_at' => now(),
        ]);

        // Attach mentors to class 3
        if ($mentors->count() >= 2) {
            ClassMentor::create(['class_id' => $class3->id, 'mentor_id' => $mentors[1]->id, 'sort_order' => 1]);
            ClassMentor::create(['class_id' => $class3->id, 'mentor_id' => $mentors[3]->id, 'sort_order' => 2]);
        }

        // Module 3.1: Project Management Fundamentals
        $module3_1 = Module::create([
            'class_id' => $class3->id,
            'title' => 'Dasar-Dasar Manajemen Proyek',
            'description' => 'Memahami siklus hidup proyek dan peran project manager.',
            'sort_order' => 1,
            'is_active' => true,
        ]);

        Video::create([
            'module_id' => $module3_1->id,
            'title' => 'Pengantar Manajemen Proyek',
            'description' => 'Konsep dasar manajemen proyek dan mengapa penting untuk kesuksesan bisnis.',
            'youtube_url' => 'https://www.youtube.com/watch?v=-W1mAr0lZck',
            'duration_sec' => 780,
            'sort_order' => 1,
            'is_preview' => true,
        ]);

        Video::create([
            'module_id' => $module3_1->id,
            'title' => 'Siklus Hidup Proyek',
            'description' => 'Memahami fase-fase proyek dari inisiasi hingga penutupan.',
            'youtube_url' => 'https://www.youtube.com/watch?v=-W1mAr0lZck',
            'duration_sec' => 900,
            'sort_order' => 2,
            'is_preview' => false,
        ]);

        $quiz3_1 = Quiz::create([
            'module_id' => $module3_1->id,
            'title' => 'Quiz: Dasar-Dasar Manajemen Proyek',
            'sort_order' => 1,
            'is_pretest' => false,
        ]);

        $this->createPMFundamentalsQuizQuestions($quiz3_1);

        // Module 3.2: Agile & Scrum Methodology
        $module3_2 = Module::create([
            'class_id' => $class3->id,
            'title' => 'Metodologi Agile & Scrum',
            'description' => 'Menguasai framework Agile dan Scrum untuk proyek yang adaptif.',
            'sort_order' => 2,
            'is_active' => true,
        ]);

        Video::create([
            'module_id' => $module3_2->id,
            'title' => 'Prinsip-Prinsip Agile',
            'description' => 'Memahami Agile Manifesto dan nilai-nilai inti metodologi Agile.',
            'youtube_url' => 'https://www.youtube.com/watch?v=-W1mAr0lZck',
            'duration_sec' => 840,
            'sort_order' => 1,
            'is_preview' => false,
        ]);

        Video::create([
            'module_id' => $module3_2->id,
            'title' => 'Scrum Framework dalam Praktik',
            'description' => 'Implementasi Sprint, Daily Standup, dan Retrospective dalam tim.',
            'youtube_url' => 'https://www.youtube.com/watch?v=-W1mAr0lZck',
            'duration_sec' => 1020,
            'sort_order' => 2,
            'is_preview' => false,
        ]);

        $quiz3_2 = Quiz::create([
            'module_id' => $module3_2->id,
            'title' => 'Quiz: Agile & Scrum',
            'sort_order' => 1,
            'is_pretest' => false,
        ]);

        $this->createAgileQuizQuestions($quiz3_2);

        // Module 3.3: Risk Management & Quality Control
        $module3_3 = Module::create([
            'class_id' => $class3->id,
            'title' => 'Manajemen Risiko & Kontrol Kualitas',
            'description' => 'Teknik mengidentifikasi risiko dan memastikan kualitas deliverable proyek.',
            'sort_order' => 3,
            'is_active' => true,
        ]);

        Video::create([
            'module_id' => $module3_3->id,
            'title' => 'Identifikasi dan Analisis Risiko',
            'description' => 'Cara mengidentifikasi potensi risiko dan menganalisis dampaknya pada proyek.',
            'youtube_url' => 'https://www.youtube.com/watch?v=-W1mAr0lZck',
            'duration_sec' => 960,
            'sort_order' => 1,
            'is_preview' => false,
        ]);

        Video::create([
            'module_id' => $module3_3->id,
            'title' => 'Quality Assurance dalam Proyek',
            'description' => 'Memastikan standar kualitas terpenuhi di setiap fase proyek.',
            'youtube_url' => 'https://www.youtube.com/watch?v=-W1mAr0lZck',
            'duration_sec' => 900,
            'sort_order' => 2,
            'is_preview' => false,
        ]);

        $quiz3_3 = Quiz::create([
            'module_id' => $module3_3->id,
            'title' => 'Quiz: Manajemen Risiko & Kualitas',
            'sort_order' => 1,
            'is_pretest' => false,
        ]);

        $this->createRiskManagementQuizQuestions($quiz3_3);
    }

    /**
     * Create quiz questions for Leadership Fundamentals
     */
    private function createLeadershipQuiz1Questions(Quiz $quiz): void
    {
        // Question 1
        $q1 = QuizQuestion::create([
            'quiz_id' => $quiz->id,
            'question' => 'Apa perbedaan utama antara seorang leader dan seorang manager?',
            'points' => 10,
            'sort_order' => 1,
        ]);

        QuizOption::create(['question_id' => $q1->id, 'label' => 'Leader fokus pada visi dan inspirasi, manager fokus pada proses dan kontrol', 'is_correct' => true, 'sort_order' => 1]);
        QuizOption::create(['question_id' => $q1->id, 'label' => 'Leader memiliki posisi lebih tinggi dari manager', 'is_correct' => false, 'sort_order' => 2]);
        QuizOption::create(['question_id' => $q1->id, 'label' => 'Manager lebih penting dari leader dalam organisasi', 'is_correct' => false, 'sort_order' => 3]);
        QuizOption::create(['question_id' => $q1->id, 'label' => 'Tidak ada perbedaan, keduanya sama', 'is_correct' => false, 'sort_order' => 4]);

        // Question 2
        $q2 = QuizQuestion::create([
            'quiz_id' => $quiz->id,
            'question' => 'Gaya kepemimpinan mana yang paling tepat ketika tim membutuhkan arahan yang jelas dan deadline ketat?',
            'points' => 10,
            'sort_order' => 2,
        ]);

        QuizOption::create(['question_id' => $q2->id, 'label' => 'Laissez-faire', 'is_correct' => false, 'sort_order' => 1]);
        QuizOption::create(['question_id' => $q2->id, 'label' => 'Directive/Authoritative', 'is_correct' => true, 'sort_order' => 2]);
        QuizOption::create(['question_id' => $q2->id, 'label' => 'Democratic', 'is_correct' => false, 'sort_order' => 3]);
        QuizOption::create(['question_id' => $q2->id, 'label' => 'Servant Leadership', 'is_correct' => false, 'sort_order' => 4]);

        // Question 3
        $q3 = QuizQuestion::create([
            'quiz_id' => $quiz->id,
            'question' => 'Apa yang dimaksud dengan Emotional Intelligence (EQ) dalam konteks kepemimpinan?',
            'points' => 10,
            'sort_order' => 3,
        ]);

        QuizOption::create(['question_id' => $q3->id, 'label' => 'Kemampuan menyelesaikan masalah matematika dengan cepat', 'is_correct' => false, 'sort_order' => 1]);
        QuizOption::create(['question_id' => $q3->id, 'label' => 'Kemampuan memahami dan mengelola emosi diri sendiri dan orang lain', 'is_correct' => true, 'sort_order' => 2]);
        QuizOption::create(['question_id' => $q3->id, 'label' => 'Tingkat kecerdasan akademis seseorang', 'is_correct' => false, 'sort_order' => 3]);
        QuizOption::create(['question_id' => $q3->id, 'label' => 'Kemampuan berbicara di depan umum', 'is_correct' => false, 'sort_order' => 4]);

        // Question 4
        $q4 = QuizQuestion::create([
            'quiz_id' => $quiz->id,
            'question' => 'Dalam situational leadership, apa yang harus dilakukan pemimpin ketika anggota tim baru dan belum berpengalaman?',
            'points' => 10,
            'sort_order' => 4,
        ]);

        QuizOption::create(['question_id' => $q4->id, 'label' => 'Memberikan kebebasan penuh untuk belajar sendiri', 'is_correct' => false, 'sort_order' => 1]);
        QuizOption::create(['question_id' => $q4->id, 'label' => 'Memberikan arahan yang detail dan supervisi yang ketat', 'is_correct' => true, 'sort_order' => 2]);
        QuizOption::create(['question_id' => $q4->id, 'label' => 'Langsung mendelegasikan tugas kompleks', 'is_correct' => false, 'sort_order' => 3]);
        QuizOption::create(['question_id' => $q4->id, 'label' => 'Membiarkan tim lain yang melatih', 'is_correct' => false, 'sort_order' => 4]);

        // Question 5
        $q5 = QuizQuestion::create([
            'quiz_id' => $quiz->id,
            'question' => 'Apa yang dimaksud dengan "Lead by Example"?',
            'points' => 10,
            'sort_order' => 5,
        ]);

        QuizOption::create(['question_id' => $q5->id, 'label' => 'Memimpin dari belakang dan membiarkan tim bekerja sendiri', 'is_correct' => false, 'sort_order' => 1]);
        QuizOption::create(['question_id' => $q5->id, 'label' => 'Menunjukkan perilaku dan nilai-nilai yang diharapkan dari tim melalui tindakan nyata', 'is_correct' => true, 'sort_order' => 2]);
        QuizOption::create(['question_id' => $q5->id, 'label' => 'Memberikan contoh dokumen yang harus diikuti', 'is_correct' => false, 'sort_order' => 3]);
        QuizOption::create(['question_id' => $q5->id, 'label' => 'Membuat peraturan yang ketat untuk dipatuhi', 'is_correct' => false, 'sort_order' => 4]);
    }

    /**
     * Create quiz questions for Communication Skills
     */
    private function createCommunicationQuizQuestions(Quiz $quiz): void
    {
        $q1 = QuizQuestion::create([
            'quiz_id' => $quiz->id,
            'question' => 'Apa komponen paling penting dalam active listening?',
            'points' => 10,
            'sort_order' => 1,
        ]);

        QuizOption::create(['question_id' => $q1->id, 'label' => 'Memikirkan respons sambil lawan bicara berbicara', 'is_correct' => false, 'sort_order' => 1]);
        QuizOption::create(['question_id' => $q1->id, 'label' => 'Memberikan perhatian penuh dan mengonfirmasi pemahaman', 'is_correct' => true, 'sort_order' => 2]);
        QuizOption::create(['question_id' => $q1->id, 'label' => 'Mencatat setiap kata yang diucapkan', 'is_correct' => false, 'sort_order' => 3]);
        QuizOption::create(['question_id' => $q1->id, 'label' => 'Langsung memberikan solusi', 'is_correct' => false, 'sort_order' => 4]);

        $q2 = QuizQuestion::create([
            'quiz_id' => $quiz->id,
            'question' => 'Metode feedback "Sandwich" terdiri dari urutan yang tepat yaitu:',
            'points' => 10,
            'sort_order' => 2,
        ]);

        QuizOption::create(['question_id' => $q2->id, 'label' => 'Kritik - Pujian - Kritik', 'is_correct' => false, 'sort_order' => 1]);
        QuizOption::create(['question_id' => $q2->id, 'label' => 'Pujian - Kritik konstruktif - Pujian/Dorongan', 'is_correct' => true, 'sort_order' => 2]);
        QuizOption::create(['question_id' => $q2->id, 'label' => 'Pujian - Pujian - Kritik', 'is_correct' => false, 'sort_order' => 3]);
        QuizOption::create(['question_id' => $q2->id, 'label' => 'Kritik - Solusi - Kritik', 'is_correct' => false, 'sort_order' => 4]);

        $q3 = QuizQuestion::create([
            'quiz_id' => $quiz->id,
            'question' => 'Berapa persen komunikasi yang berasal dari bahasa tubuh menurut studi Albert Mehrabian?',
            'points' => 10,
            'sort_order' => 3,
        ]);

        QuizOption::create(['question_id' => $q3->id, 'label' => '7%', 'is_correct' => false, 'sort_order' => 1]);
        QuizOption::create(['question_id' => $q3->id, 'label' => '38%', 'is_correct' => false, 'sort_order' => 2]);
        QuizOption::create(['question_id' => $q3->id, 'label' => '55%', 'is_correct' => true, 'sort_order' => 3]);
        QuizOption::create(['question_id' => $q3->id, 'label' => '93%', 'is_correct' => false, 'sort_order' => 4]);

        $q4 = QuizQuestion::create([
            'quiz_id' => $quiz->id,
            'question' => 'Dalam komunikasi tim, apa yang dimaksud dengan "psychological safety"?',
            'points' => 10,
            'sort_order' => 4,
        ]);

        QuizOption::create(['question_id' => $q4->id, 'label' => 'Ruangan yang aman secara fisik untuk rapat', 'is_correct' => false, 'sort_order' => 1]);
        QuizOption::create(['question_id' => $q4->id, 'label' => 'Lingkungan di mana anggota tim merasa aman untuk berbicara tanpa takut dihakimi', 'is_correct' => true, 'sort_order' => 2]);
        QuizOption::create(['question_id' => $q4->id, 'label' => 'Kebijakan perusahaan tentang kesehatan mental', 'is_correct' => false, 'sort_order' => 3]);
        QuizOption::create(['question_id' => $q4->id, 'label' => 'Asuransi kesehatan untuk karyawan', 'is_correct' => false, 'sort_order' => 4]);

        $q5 = QuizQuestion::create([
            'quiz_id' => $quiz->id,
            'question' => 'Apa langkah pertama yang sebaiknya dilakukan saat menghadapi konflik dalam tim?',
            'points' => 10,
            'sort_order' => 5,
        ]);

        QuizOption::create(['question_id' => $q5->id, 'label' => 'Langsung memberikan keputusan untuk mengakhiri konflik', 'is_correct' => false, 'sort_order' => 1]);
        QuizOption::create(['question_id' => $q5->id, 'label' => 'Mendengarkan semua pihak yang terlibat secara objektif', 'is_correct' => true, 'sort_order' => 2]);
        QuizOption::create(['question_id' => $q5->id, 'label' => 'Memihak salah satu pihak yang lebih senior', 'is_correct' => false, 'sort_order' => 3]);
        QuizOption::create(['question_id' => $q5->id, 'label' => 'Menghindari konflik dan berharap selesai sendiri', 'is_correct' => false, 'sort_order' => 4]);
    }

    /**
     * Create quiz questions for Decision Making
     */
    private function createDecisionMakingQuizQuestions(Quiz $quiz): void
    {
        $q1 = QuizQuestion::create([
            'quiz_id' => $quiz->id,
            'question' => 'Apa kepanjangan dari SWOT Analysis?',
            'points' => 10,
            'sort_order' => 1,
        ]);

        QuizOption::create(['question_id' => $q1->id, 'label' => 'Strengths, Weaknesses, Opportunities, Threats', 'is_correct' => true, 'sort_order' => 1]);
        QuizOption::create(['question_id' => $q1->id, 'label' => 'Strategy, Workflow, Operations, Tasks', 'is_correct' => false, 'sort_order' => 2]);
        QuizOption::create(['question_id' => $q1->id, 'label' => 'Systems, Work, Organization, Teams', 'is_correct' => false, 'sort_order' => 3]);
        QuizOption::create(['question_id' => $q1->id, 'label' => 'Sales, Wealth, Output, Targets', 'is_correct' => false, 'sort_order' => 4]);

        $q2 = QuizQuestion::create([
            'quiz_id' => $quiz->id,
            'question' => 'Dalam pengambilan keputusan, apa yang dimaksud dengan "analysis paralysis"?',
            'points' => 10,
            'sort_order' => 2,
        ]);

        QuizOption::create(['question_id' => $q2->id, 'label' => 'Keputusan yang diambil terlalu cepat', 'is_correct' => false, 'sort_order' => 1]);
        QuizOption::create(['question_id' => $q2->id, 'label' => 'Ketidakmampuan mengambil keputusan karena terlalu banyak menganalisis', 'is_correct' => true, 'sort_order' => 2]);
        QuizOption::create(['question_id' => $q2->id, 'label' => 'Analisis yang sangat akurat', 'is_correct' => false, 'sort_order' => 3]);
        QuizOption::create(['question_id' => $q2->id, 'label' => 'Teknik analisis khusus untuk keputusan kompleks', 'is_correct' => false, 'sort_order' => 4]);

        $q3 = QuizQuestion::create([
            'quiz_id' => $quiz->id,
            'question' => 'Teknik "6 Thinking Hats" dikembangkan oleh siapa?',
            'points' => 10,
            'sort_order' => 3,
        ]);

        QuizOption::create(['question_id' => $q3->id, 'label' => 'Peter Drucker', 'is_correct' => false, 'sort_order' => 1]);
        QuizOption::create(['question_id' => $q3->id, 'label' => 'Edward de Bono', 'is_correct' => true, 'sort_order' => 2]);
        QuizOption::create(['question_id' => $q3->id, 'label' => 'Stephen Covey', 'is_correct' => false, 'sort_order' => 3]);
        QuizOption::create(['question_id' => $q3->id, 'label' => 'Michael Porter', 'is_correct' => false, 'sort_order' => 4]);

        $q4 = QuizQuestion::create([
            'quiz_id' => $quiz->id,
            'question' => 'Apa fungsi utama dari Decision Matrix (Matriks Keputusan)?',
            'points' => 10,
            'sort_order' => 4,
        ]);

        QuizOption::create(['question_id' => $q4->id, 'label' => 'Menghitung profit dari setiap keputusan', 'is_correct' => false, 'sort_order' => 1]);
        QuizOption::create(['question_id' => $q4->id, 'label' => 'Membandingkan berbagai alternatif berdasarkan kriteria yang terbobot', 'is_correct' => true, 'sort_order' => 2]);
        QuizOption::create(['question_id' => $q4->id, 'label' => 'Memprediksi masa depan bisnis', 'is_correct' => false, 'sort_order' => 3]);
        QuizOption::create(['question_id' => $q4->id, 'label' => 'Mengukur kepuasan pelanggan', 'is_correct' => false, 'sort_order' => 4]);

        $q5 = QuizQuestion::create([
            'quiz_id' => $quiz->id,
            'question' => 'Prinsip Pareto (80/20) dalam konteks keputusan bisnis berarti:',
            'points' => 10,
            'sort_order' => 5,
        ]);

        QuizOption::create(['question_id' => $q5->id, 'label' => '80% keputusan harus diambil oleh 20% manajer', 'is_correct' => false, 'sort_order' => 1]);
        QuizOption::create(['question_id' => $q5->id, 'label' => '80% hasil biasanya berasal dari 20% usaha/faktor', 'is_correct' => true, 'sort_order' => 2]);
        QuizOption::create(['question_id' => $q5->id, 'label' => '80% waktu harus digunakan untuk planning', 'is_correct' => false, 'sort_order' => 3]);
        QuizOption::create(['question_id' => $q5->id, 'label' => '80% budget untuk operasional, 20% untuk investasi', 'is_correct' => false, 'sort_order' => 4]);
    }

    /**
     * Create quiz questions for Public Speaking
     */
    private function createPublicSpeakingQuizQuestions(Quiz $quiz): void
    {
        $q1 = QuizQuestion::create([
            'quiz_id' => $quiz->id,
            'question' => 'Apa teknik pernapasan yang efektif untuk mengurangi kecemasan sebelum presentasi?',
            'points' => 10,
            'sort_order' => 1,
        ]);

        QuizOption::create(['question_id' => $q1->id, 'label' => 'Bernapas cepat dan pendek', 'is_correct' => false, 'sort_order' => 1]);
        QuizOption::create(['question_id' => $q1->id, 'label' => 'Diaphragmatic breathing (pernapasan perut yang dalam dan lambat)', 'is_correct' => true, 'sort_order' => 2]);
        QuizOption::create(['question_id' => $q1->id, 'label' => 'Menahan napas selama mungkin', 'is_correct' => false, 'sort_order' => 3]);
        QuizOption::create(['question_id' => $q1->id, 'label' => 'Bernapas melalui mulut saja', 'is_correct' => false, 'sort_order' => 4]);

        $q2 = QuizQuestion::create([
            'quiz_id' => $quiz->id,
            'question' => 'Postur tubuh yang baik saat presentasi adalah:',
            'points' => 10,
            'sort_order' => 2,
        ]);

        QuizOption::create(['question_id' => $q2->id, 'label' => 'Berdiri dengan tangan di saku', 'is_correct' => false, 'sort_order' => 1]);
        QuizOption::create(['question_id' => $q2->id, 'label' => 'Berdiri tegak, bahu rileks, dan kontak mata dengan audiens', 'is_correct' => true, 'sort_order' => 2]);
        QuizOption::create(['question_id' => $q2->id, 'label' => 'Bersandar pada podium atau meja', 'is_correct' => false, 'sort_order' => 3]);
        QuizOption::create(['question_id' => $q2->id, 'label' => 'Menyilangkan tangan di dada', 'is_correct' => false, 'sort_order' => 4]);

        $q3 = QuizQuestion::create([
            'quiz_id' => $quiz->id,
            'question' => 'Berapa lama waktu yang ideal untuk pembukaan presentasi yang menarik?',
            'points' => 10,
            'sort_order' => 3,
        ]);

        QuizOption::create(['question_id' => $q3->id, 'label' => '10-15 menit', 'is_correct' => false, 'sort_order' => 1]);
        QuizOption::create(['question_id' => $q3->id, 'label' => '30-60 detik', 'is_correct' => true, 'sort_order' => 2]);
        QuizOption::create(['question_id' => $q3->id, 'label' => '5-10 menit', 'is_correct' => false, 'sort_order' => 3]);
        QuizOption::create(['question_id' => $q3->id, 'label' => 'Tidak ada batasan waktu', 'is_correct' => false, 'sort_order' => 4]);

        $q4 = QuizQuestion::create([
            'quiz_id' => $quiz->id,
            'question' => 'Teknik "Power Pose" sebelum presentasi berguna untuk:',
            'points' => 10,
            'sort_order' => 4,
        ]);

        QuizOption::create(['question_id' => $q4->id, 'label' => 'Meningkatkan volume suara', 'is_correct' => false, 'sort_order' => 1]);
        QuizOption::create(['question_id' => $q4->id, 'label' => 'Meningkatkan rasa percaya diri melalui postur tubuh terbuka', 'is_correct' => true, 'sort_order' => 2]);
        QuizOption::create(['question_id' => $q4->id, 'label' => 'Menghafal materi presentasi', 'is_correct' => false, 'sort_order' => 3]);
        QuizOption::create(['question_id' => $q4->id, 'label' => 'Melatih gerakan tangan', 'is_correct' => false, 'sort_order' => 4]);

        $q5 = QuizQuestion::create([
            'quiz_id' => $quiz->id,
            'question' => 'Apa yang sebaiknya dilakukan saat lupa materi di tengah presentasi?',
            'points' => 10,
            'sort_order' => 5,
        ]);

        QuizOption::create(['question_id' => $q5->id, 'label' => 'Langsung meminta maaf dan mengakhiri presentasi', 'is_correct' => false, 'sort_order' => 1]);
        QuizOption::create(['question_id' => $q5->id, 'label' => 'Jeda sejenak, lihat catatan, atau ajukan pertanyaan kepada audiens', 'is_correct' => true, 'sort_order' => 2]);
        QuizOption::create(['question_id' => $q5->id, 'label' => 'Membaca slide dengan keras', 'is_correct' => false, 'sort_order' => 3]);
        QuizOption::create(['question_id' => $q5->id, 'label' => 'Mengabaikan dan melanjutkan ke slide berikutnya', 'is_correct' => false, 'sort_order' => 4]);
    }

    /**
     * Create quiz questions for Presentation Design
     */
    private function createPresentationQuizQuestions(Quiz $quiz): void
    {
        $q1 = QuizQuestion::create([
            'quiz_id' => $quiz->id,
            'question' => 'Prinsip "Rule of Three" dalam presentasi berarti:',
            'points' => 10,
            'sort_order' => 1,
        ]);

        QuizOption::create(['question_id' => $q1->id, 'label' => 'Presentasi harus maksimal 3 menit', 'is_correct' => false, 'sort_order' => 1]);
        QuizOption::create(['question_id' => $q1->id, 'label' => 'Informasi lebih mudah diingat jika dikelompokkan dalam 3 poin utama', 'is_correct' => true, 'sort_order' => 2]);
        QuizOption::create(['question_id' => $q1->id, 'label' => 'Slide harus memiliki 3 warna', 'is_correct' => false, 'sort_order' => 3]);
        QuizOption::create(['question_id' => $q1->id, 'label' => 'Presentasi harus diulang 3 kali', 'is_correct' => false, 'sort_order' => 4]);

        $q2 = QuizQuestion::create([
            'quiz_id' => $quiz->id,
            'question' => 'Berapa jumlah teks maksimal yang disarankan dalam satu slide?',
            'points' => 10,
            'sort_order' => 2,
        ]);

        QuizOption::create(['question_id' => $q2->id, 'label' => 'Sebanyak mungkin agar informatif', 'is_correct' => false, 'sort_order' => 1]);
        QuizOption::create(['question_id' => $q2->id, 'label' => '6-8 baris dengan poin-poin singkat', 'is_correct' => true, 'sort_order' => 2]);
        QuizOption::create(['question_id' => $q2->id, 'label' => 'Minimal 20 baris', 'is_correct' => false, 'sort_order' => 3]);
        QuizOption::create(['question_id' => $q2->id, 'label' => 'Tidak perlu teks, hanya gambar', 'is_correct' => false, 'sort_order' => 4]);

        $q3 = QuizQuestion::create([
            'quiz_id' => $quiz->id,
            'question' => 'Struktur storytelling yang efektif untuk presentasi bisnis adalah:',
            'points' => 10,
            'sort_order' => 3,
        ]);

        QuizOption::create(['question_id' => $q3->id, 'label' => 'Hanya menyampaikan data dan fakta', 'is_correct' => false, 'sort_order' => 1]);
        QuizOption::create(['question_id' => $q3->id, 'label' => 'Situation - Complication - Resolution', 'is_correct' => true, 'sort_order' => 2]);
        QuizOption::create(['question_id' => $q3->id, 'label' => 'Membaca teks dari slide', 'is_correct' => false, 'sort_order' => 3]);
        QuizOption::create(['question_id' => $q3->id, 'label' => 'Menceritakan pengalaman pribadi saja', 'is_correct' => false, 'sort_order' => 4]);

        $q4 = QuizQuestion::create([
            'quiz_id' => $quiz->id,
            'question' => 'Apa fungsi utama dari visual dalam presentasi?',
            'points' => 10,
            'sort_order' => 4,
        ]);

        QuizOption::create(['question_id' => $q4->id, 'label' => 'Mengisi ruang kosong di slide', 'is_correct' => false, 'sort_order' => 1]);
        QuizOption::create(['question_id' => $q4->id, 'label' => 'Mendukung dan memperkuat pesan yang disampaikan', 'is_correct' => true, 'sort_order' => 2]);
        QuizOption::create(['question_id' => $q4->id, 'label' => 'Menggantikan penjelasan verbal', 'is_correct' => false, 'sort_order' => 3]);
        QuizOption::create(['question_id' => $q4->id, 'label' => 'Membuat slide terlihat ramai', 'is_correct' => false, 'sort_order' => 4]);

        $q5 = QuizQuestion::create([
            'quiz_id' => $quiz->id,
            'question' => 'Teknik "Callback" dalam presentasi adalah:',
            'points' => 10,
            'sort_order' => 5,
        ]);

        QuizOption::create(['question_id' => $q5->id, 'label' => 'Menelepon audiens setelah presentasi', 'is_correct' => false, 'sort_order' => 1]);
        QuizOption::create(['question_id' => $q5->id, 'label' => 'Merujuk kembali ke poin atau cerita yang sudah disampaikan sebelumnya', 'is_correct' => true, 'sort_order' => 2]);
        QuizOption::create(['question_id' => $q5->id, 'label' => 'Meminta audiens untuk menelepon', 'is_correct' => false, 'sort_order' => 3]);
        QuizOption::create(['question_id' => $q5->id, 'label' => 'Mengulang seluruh presentasi di akhir', 'is_correct' => false, 'sort_order' => 4]);
    }

    /**
     * Create quiz questions for Negotiation
     */
    private function createNegotiationQuizQuestions(Quiz $quiz): void
    {
        $q1 = QuizQuestion::create([
            'quiz_id' => $quiz->id,
            'question' => 'Apa kepanjangan dari BATNA dalam negosiasi?',
            'points' => 10,
            'sort_order' => 1,
        ]);

        QuizOption::create(['question_id' => $q1->id, 'label' => 'Best Agreement To Negotiate Always', 'is_correct' => false, 'sort_order' => 1]);
        QuizOption::create(['question_id' => $q1->id, 'label' => 'Best Alternative To a Negotiated Agreement', 'is_correct' => true, 'sort_order' => 2]);
        QuizOption::create(['question_id' => $q1->id, 'label' => 'Business Alliance Through Negotiation Agreement', 'is_correct' => false, 'sort_order' => 3]);
        QuizOption::create(['question_id' => $q1->id, 'label' => 'Better Approach To Negotiation Analysis', 'is_correct' => false, 'sort_order' => 4]);

        $q2 = QuizQuestion::create([
            'quiz_id' => $quiz->id,
            'question' => 'ZOPA dalam negosiasi adalah:',
            'points' => 10,
            'sort_order' => 2,
        ]);

        QuizOption::create(['question_id' => $q2->id, 'label' => 'Zona larangan dalam negosiasi', 'is_correct' => false, 'sort_order' => 1]);
        QuizOption::create(['question_id' => $q2->id, 'label' => 'Zone of Possible Agreement - area di mana kesepakatan mungkin tercapai', 'is_correct' => true, 'sort_order' => 2]);
        QuizOption::create(['question_id' => $q2->id, 'label' => 'Teknik untuk menekan lawan negosiasi', 'is_correct' => false, 'sort_order' => 3]);
        QuizOption::create(['question_id' => $q2->id, 'label' => 'Strategi untuk menghindari negosiasi', 'is_correct' => false, 'sort_order' => 4]);

        $q3 = QuizQuestion::create([
            'quiz_id' => $quiz->id,
            'question' => 'Prinsip "Win-Win Negotiation" berarti:',
            'points' => 10,
            'sort_order' => 3,
        ]);

        QuizOption::create(['question_id' => $q3->id, 'label' => 'Salah satu pihak harus kalah', 'is_correct' => false, 'sort_order' => 1]);
        QuizOption::create(['question_id' => $q3->id, 'label' => 'Kedua belah pihak mendapat manfaat dari kesepakatan', 'is_correct' => true, 'sort_order' => 2]);
        QuizOption::create(['question_id' => $q3->id, 'label' => 'Menang dengan cara apapun', 'is_correct' => false, 'sort_order' => 3]);
        QuizOption::create(['question_id' => $q3->id, 'label' => 'Tidak ada kesepakatan yang tercapai', 'is_correct' => false, 'sort_order' => 4]);

        $q4 = QuizQuestion::create([
            'quiz_id' => $quiz->id,
            'question' => 'Apa yang harus dilakukan saat negosiasi mengalami deadlock?',
            'points' => 10,
            'sort_order' => 4,
        ]);

        QuizOption::create(['question_id' => $q4->id, 'label' => 'Langsung mengakhiri negosiasi', 'is_correct' => false, 'sort_order' => 1]);
        QuizOption::create(['question_id' => $q4->id, 'label' => 'Mencari alternatif solusi atau reframing masalah', 'is_correct' => true, 'sort_order' => 2]);
        QuizOption::create(['question_id' => $q4->id, 'label' => 'Menerima semua permintaan pihak lain', 'is_correct' => false, 'sort_order' => 3]);
        QuizOption::create(['question_id' => $q4->id, 'label' => 'Meninggikan suara untuk menekan', 'is_correct' => false, 'sort_order' => 4]);

        $q5 = QuizQuestion::create([
            'quiz_id' => $quiz->id,
            'question' => 'Teknik "Anchoring" dalam negosiasi adalah:',
            'points' => 10,
            'sort_order' => 5,
        ]);

        QuizOption::create(['question_id' => $q5->id, 'label' => 'Menetapkan titik awal yang mempengaruhi seluruh proses negosiasi', 'is_correct' => true, 'sort_order' => 1]);
        QuizOption::create(['question_id' => $q5->id, 'label' => 'Menahan diri untuk tidak berbicara', 'is_correct' => false, 'sort_order' => 2]);
        QuizOption::create(['question_id' => $q5->id, 'label' => 'Mengulur waktu negosiasi', 'is_correct' => false, 'sort_order' => 3]);
        QuizOption::create(['question_id' => $q5->id, 'label' => 'Menolak semua tawaran awal', 'is_correct' => false, 'sort_order' => 4]);
    }

    /**
     * Create quiz questions for PM Fundamentals
     */
    private function createPMFundamentalsQuizQuestions(Quiz $quiz): void
    {
        $q1 = QuizQuestion::create([
            'quiz_id' => $quiz->id,
            'question' => 'Apa saja 5 fase utama dalam siklus hidup proyek (Project Life Cycle)?',
            'points' => 10,
            'sort_order' => 1,
        ]);

        QuizOption::create(['question_id' => $q1->id, 'label' => 'Plan, Do, Check, Act, Review', 'is_correct' => false, 'sort_order' => 1]);
        QuizOption::create(['question_id' => $q1->id, 'label' => 'Initiating, Planning, Executing, Monitoring & Controlling, Closing', 'is_correct' => true, 'sort_order' => 2]);
        QuizOption::create(['question_id' => $q1->id, 'label' => 'Design, Build, Test, Deploy, Maintain', 'is_correct' => false, 'sort_order' => 3]);
        QuizOption::create(['question_id' => $q1->id, 'label' => 'Analysis, Design, Implementation, Testing, Documentation', 'is_correct' => false, 'sort_order' => 4]);

        $q2 = QuizQuestion::create([
            'quiz_id' => $quiz->id,
            'question' => 'Triple Constraint dalam manajemen proyek terdiri dari:',
            'points' => 10,
            'sort_order' => 2,
        ]);

        QuizOption::create(['question_id' => $q2->id, 'label' => 'People, Process, Technology', 'is_correct' => false, 'sort_order' => 1]);
        QuizOption::create(['question_id' => $q2->id, 'label' => 'Scope, Time, Cost', 'is_correct' => true, 'sort_order' => 2]);
        QuizOption::create(['question_id' => $q2->id, 'label' => 'Quality, Risk, Resources', 'is_correct' => false, 'sort_order' => 3]);
        QuizOption::create(['question_id' => $q2->id, 'label' => 'Planning, Execution, Delivery', 'is_correct' => false, 'sort_order' => 4]);

        $q3 = QuizQuestion::create([
            'quiz_id' => $quiz->id,
            'question' => 'Apa dokumen yang mendefinisikan tujuan, scope, dan stakeholder proyek?',
            'points' => 10,
            'sort_order' => 3,
        ]);

        QuizOption::create(['question_id' => $q3->id, 'label' => 'Work Breakdown Structure (WBS)', 'is_correct' => false, 'sort_order' => 1]);
        QuizOption::create(['question_id' => $q3->id, 'label' => 'Project Charter', 'is_correct' => true, 'sort_order' => 2]);
        QuizOption::create(['question_id' => $q3->id, 'label' => 'Gantt Chart', 'is_correct' => false, 'sort_order' => 3]);
        QuizOption::create(['question_id' => $q3->id, 'label' => 'Risk Register', 'is_correct' => false, 'sort_order' => 4]);

        $q4 = QuizQuestion::create([
            'quiz_id' => $quiz->id,
            'question' => 'Work Breakdown Structure (WBS) digunakan untuk:',
            'points' => 10,
            'sort_order' => 4,
        ]);

        QuizOption::create(['question_id' => $q4->id, 'label' => 'Membagi proyek menjadi komponen-komponen yang lebih kecil dan terkelola', 'is_correct' => true, 'sort_order' => 1]);
        QuizOption::create(['question_id' => $q4->id, 'label' => 'Menghitung budget proyek', 'is_correct' => false, 'sort_order' => 2]);
        QuizOption::create(['question_id' => $q4->id, 'label' => 'Mengidentifikasi risiko proyek', 'is_correct' => false, 'sort_order' => 3]);
        QuizOption::create(['question_id' => $q4->id, 'label' => 'Mengevaluasi kinerja tim', 'is_correct' => false, 'sort_order' => 4]);

        $q5 = QuizQuestion::create([
            'quiz_id' => $quiz->id,
            'question' => 'Siapa yang bertanggung jawab untuk keberhasilan keseluruhan proyek?',
            'points' => 10,
            'sort_order' => 5,
        ]);

        QuizOption::create(['question_id' => $q5->id, 'label' => 'Stakeholder', 'is_correct' => false, 'sort_order' => 1]);
        QuizOption::create(['question_id' => $q5->id, 'label' => 'Project Manager', 'is_correct' => true, 'sort_order' => 2]);
        QuizOption::create(['question_id' => $q5->id, 'label' => 'Tim Developer', 'is_correct' => false, 'sort_order' => 3]);
        QuizOption::create(['question_id' => $q5->id, 'label' => 'CEO Perusahaan', 'is_correct' => false, 'sort_order' => 4]);
    }

    /**
     * Create quiz questions for Agile & Scrum
     */
    private function createAgileQuizQuestions(Quiz $quiz): void
    {
        $q1 = QuizQuestion::create([
            'quiz_id' => $quiz->id,
            'question' => 'Berapa lama durasi ideal sebuah Sprint dalam Scrum?',
            'points' => 10,
            'sort_order' => 1,
        ]);

        QuizOption::create(['question_id' => $q1->id, 'label' => '1 hari', 'is_correct' => false, 'sort_order' => 1]);
        QuizOption::create(['question_id' => $q1->id, 'label' => '1-4 minggu', 'is_correct' => true, 'sort_order' => 2]);
        QuizOption::create(['question_id' => $q1->id, 'label' => '6 bulan', 'is_correct' => false, 'sort_order' => 3]);
        QuizOption::create(['question_id' => $q1->id, 'label' => '1 tahun', 'is_correct' => false, 'sort_order' => 4]);

        $q2 = QuizQuestion::create([
            'quiz_id' => $quiz->id,
            'question' => 'Siapa yang bertanggung jawab untuk memprioritaskan Product Backlog?',
            'points' => 10,
            'sort_order' => 2,
        ]);

        QuizOption::create(['question_id' => $q2->id, 'label' => 'Scrum Master', 'is_correct' => false, 'sort_order' => 1]);
        QuizOption::create(['question_id' => $q2->id, 'label' => 'Product Owner', 'is_correct' => true, 'sort_order' => 2]);
        QuizOption::create(['question_id' => $q2->id, 'label' => 'Development Team', 'is_correct' => false, 'sort_order' => 3]);
        QuizOption::create(['question_id' => $q2->id, 'label' => 'Stakeholder', 'is_correct' => false, 'sort_order' => 4]);

        $q3 = QuizQuestion::create([
            'quiz_id' => $quiz->id,
            'question' => 'Apa tujuan utama dari Daily Standup/Daily Scrum?',
            'points' => 10,
            'sort_order' => 3,
        ]);

        QuizOption::create(['question_id' => $q3->id, 'label' => 'Melaporkan kinerja ke manajemen', 'is_correct' => false, 'sort_order' => 1]);
        QuizOption::create(['question_id' => $q3->id, 'label' => 'Sinkronisasi tim dan mengidentifikasi hambatan', 'is_correct' => true, 'sort_order' => 2]);
        QuizOption::create(['question_id' => $q3->id, 'label' => 'Review hasil kerja', 'is_correct' => false, 'sort_order' => 3]);
        QuizOption::create(['question_id' => $q3->id, 'label' => 'Planning sprint berikutnya', 'is_correct' => false, 'sort_order' => 4]);

        $q4 = QuizQuestion::create([
            'quiz_id' => $quiz->id,
            'question' => 'Sprint Retrospective dilakukan untuk:',
            'points' => 10,
            'sort_order' => 4,
        ]);

        QuizOption::create(['question_id' => $q4->id, 'label' => 'Demo hasil kerja ke stakeholder', 'is_correct' => false, 'sort_order' => 1]);
        QuizOption::create(['question_id' => $q4->id, 'label' => 'Evaluasi proses tim dan identifikasi perbaikan untuk sprint selanjutnya', 'is_correct' => true, 'sort_order' => 2]);
        QuizOption::create(['question_id' => $q4->id, 'label' => 'Merencanakan backlog untuk sprint', 'is_correct' => false, 'sort_order' => 3]);
        QuizOption::create(['question_id' => $q4->id, 'label' => 'Menghitung velocity tim', 'is_correct' => false, 'sort_order' => 4]);

        $q5 = QuizQuestion::create([
            'quiz_id' => $quiz->id,
            'question' => 'Salah satu nilai utama dalam Agile Manifesto adalah:',
            'points' => 10,
            'sort_order' => 5,
        ]);

        QuizOption::create(['question_id' => $q5->id, 'label' => 'Dokumentasi lengkap lebih penting dari software yang berjalan', 'is_correct' => false, 'sort_order' => 1]);
        QuizOption::create(['question_id' => $q5->id, 'label' => 'Merespons perubahan lebih penting dari mengikuti rencana', 'is_correct' => true, 'sort_order' => 2]);
        QuizOption::create(['question_id' => $q5->id, 'label' => 'Kontrak negosiasi lebih penting dari kolaborasi pelanggan', 'is_correct' => false, 'sort_order' => 3]);
        QuizOption::create(['question_id' => $q5->id, 'label' => 'Proses dan tools lebih penting dari individu', 'is_correct' => false, 'sort_order' => 4]);
    }

    /**
     * Create quiz questions for Risk Management
     */
    private function createRiskManagementQuizQuestions(Quiz $quiz): void
    {
        $q1 = QuizQuestion::create([
            'quiz_id' => $quiz->id,
            'question' => 'Apa yang dimaksud dengan Risk Register?',
            'points' => 10,
            'sort_order' => 1,
        ]);

        QuizOption::create(['question_id' => $q1->id, 'label' => 'Daftar semua karyawan yang berisiko di-PHK', 'is_correct' => false, 'sort_order' => 1]);
        QuizOption::create(['question_id' => $q1->id, 'label' => 'Dokumen yang mencatat semua risiko yang teridentifikasi beserta analisis dan rencana mitigasinya', 'is_correct' => true, 'sort_order' => 2]);
        QuizOption::create(['question_id' => $q1->id, 'label' => 'Laporan keuangan perusahaan', 'is_correct' => false, 'sort_order' => 3]);
        QuizOption::create(['question_id' => $q1->id, 'label' => 'Daftar vendor yang berisiko', 'is_correct' => false, 'sort_order' => 4]);

        $q2 = QuizQuestion::create([
            'quiz_id' => $quiz->id,
            'question' => 'Strategi respons risiko "Mitigate" berarti:',
            'points' => 10,
            'sort_order' => 2,
        ]);

        QuizOption::create(['question_id' => $q2->id, 'label' => 'Mengabaikan risiko sepenuhnya', 'is_correct' => false, 'sort_order' => 1]);
        QuizOption::create(['question_id' => $q2->id, 'label' => 'Mengurangi probabilitas atau dampak risiko', 'is_correct' => true, 'sort_order' => 2]);
        QuizOption::create(['question_id' => $q2->id, 'label' => 'Memindahkan risiko ke pihak lain', 'is_correct' => false, 'sort_order' => 3]);
        QuizOption::create(['question_id' => $q2->id, 'label' => 'Menerima risiko tanpa tindakan', 'is_correct' => false, 'sort_order' => 4]);

        $q3 = QuizQuestion::create([
            'quiz_id' => $quiz->id,
            'question' => 'Quality Assurance (QA) berbeda dengan Quality Control (QC) karena:',
            'points' => 10,
            'sort_order' => 3,
        ]);

        QuizOption::create(['question_id' => $q3->id, 'label' => 'QA fokus pada pencegahan defect, QC fokus pada deteksi defect', 'is_correct' => true, 'sort_order' => 1]);
        QuizOption::create(['question_id' => $q3->id, 'label' => 'QA lebih mahal dari QC', 'is_correct' => false, 'sort_order' => 2]);
        QuizOption::create(['question_id' => $q3->id, 'label' => 'QC dilakukan sebelum QA', 'is_correct' => false, 'sort_order' => 3]);
        QuizOption::create(['question_id' => $q3->id, 'label' => 'Tidak ada perbedaan, keduanya sama', 'is_correct' => false, 'sort_order' => 4]);

        $q4 = QuizQuestion::create([
            'quiz_id' => $quiz->id,
            'question' => 'Probability Impact Matrix digunakan untuk:',
            'points' => 10,
            'sort_order' => 4,
        ]);

        QuizOption::create(['question_id' => $q4->id, 'label' => 'Menghitung budget proyek', 'is_correct' => false, 'sort_order' => 1]);
        QuizOption::create(['question_id' => $q4->id, 'label' => 'Memprioritaskan risiko berdasarkan kemungkinan dan dampaknya', 'is_correct' => true, 'sort_order' => 2]);
        QuizOption::create(['question_id' => $q4->id, 'label' => 'Mengukur kinerja tim', 'is_correct' => false, 'sort_order' => 3]);
        QuizOption::create(['question_id' => $q4->id, 'label' => 'Menentukan timeline proyek', 'is_correct' => false, 'sort_order' => 4]);

        $q5 = QuizQuestion::create([
            'quiz_id' => $quiz->id,
            'question' => 'Apa yang dimaksud dengan Contingency Reserve dalam manajemen risiko?',
            'points' => 10,
            'sort_order' => 5,
        ]);

        QuizOption::create(['question_id' => $q5->id, 'label' => 'Dana cadangan untuk bonus tim', 'is_correct' => false, 'sort_order' => 1]);
        QuizOption::create(['question_id' => $q5->id, 'label' => 'Budget atau waktu yang dialokasikan untuk menangani risiko yang teridentifikasi', 'is_correct' => true, 'sort_order' => 2]);
        QuizOption::create(['question_id' => $q5->id, 'label' => 'Uang untuk membeli peralatan baru', 'is_correct' => false, 'sort_order' => 3]);
        QuizOption::create(['question_id' => $q5->id, 'label' => 'Dana untuk marketing proyek', 'is_correct' => false, 'sort_order' => 4]);
    }
}
