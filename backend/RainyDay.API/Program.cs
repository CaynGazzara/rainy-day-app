using Microsoft.EntityFrameworkCore;
using RainyDay.API.Data;
using RainyDay.API.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Add CORS
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAngular", policy =>
    {
        policy.WithOrigins("http://localhost:4200", "https://localhost:4200")
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});

// Add DbContext
builder.Services.AddDbContext<SoundContext>(opt =>
    opt.UseInMemoryDatabase("SoundsDb"));

// Add Services
builder.Services.AddScoped<ISoundService, SoundService>();

var app = builder.Build();

// 🔥 GARANTIR QUE O BANCO SEJA CRIADO E POPULADO
using (var scope = app.Services.CreateScope())
{
    var context = scope.ServiceProvider.GetRequiredService<SoundContext>();
    context.Database.EnsureCreated(); // Isso força a criação e o seed dos dados
}

// Configure the HTTP request pipeline
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors("AllowAngular");
app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();

app.Run();