namespace FullStackToDo.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class InitialCreate : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Todoes",
                c => new
                    {
                        TodoId = c.Int(nullable: false, identity: true),
                        TodoTaskName = c.String(),
                        TodoTaskDescription = c.String(),
                        TodoPriority = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.TodoId);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.Todoes");
        }
    }
}
